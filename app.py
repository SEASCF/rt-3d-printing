from flask import Flask, render_template, url_for, request
from dotenv import load_dotenv, find_dotenv
import json, rt, os

# get login info from .env
load_dotenv(find_dotenv())

# initialize flask app
app = Flask(__name__)

# initialize tracker object 
tracker = rt.Rt('https://ticket.seas.gwu.edu/rt/REST/1.0/', os.getenv("USERNAME"), os.getenv("PASSWORD"), verify_cert=False)
try:
    tracker.login()
except Exception as e:
    print("Could not log in, error: " + e)
else:
    print("Successfully logged in.")

# read in auto-emails
emails = []
count = 0

f = open("static/emails.txt", "r")

for x in f:
    emails[count].append(x)
    emails[count].append("\n")
    if x == "~":
        count += 1
    
'''
    populate is the function that is called on refresh/initial loading of page.
'''
@app.route("/api/populate")
@app.route("/")
def populate():
    # retreive all open and new 3D printing tickets
    tickets = tracker.search(Queue='3 D printing', Status='open', Format= 's')
    tickets.extend(tracker.search(Queue='3 D printing', Status='new', Format= 's'))

    # the following are valid subjects for a 3d print request ticket to have
    valid_subj = ['PRINTING ON PRINTER 1', 'PRINTING ON PRINTER 2', 'PRINTING ON PRINTER 3', 'PRINTING ON PRINTER 4', 'IN CLEANING TANK 1', 'IN CLEANING TANK 2', 'IN CLEANING TANK 3', 'DRYING', 'READY FOR PICKUP']

    requestors = []
    date = []
    ticket_number = []
    subj = []

    # remove any tickets from list that are not 3D printing requests
    for ticket in tickets:
        if ticket["Subject"].find("- 3D Printing Request -") == -1:
            tickets.remove(ticket)
            
    # grab all ticket numbers
    for ticket in tickets:
        ticket_number.append(ticket["numerical_id"])
        
    # get requestor/date/subject with ticket number
    for i in ticket_number:
        t = tracker.get_ticket(i)
        requestors.append(t["Requestors"])
        date.append(t["Created"])
        subj.append(t["Subject"])

    # format requestor name so that it is just the netid
    for i in range(len(requestors)):
        requestors[i] = str(requestors[i]).strip("[]")
        requestors[i] = str(requestors[i]).strip("''")
        for j in range(len(str(requestors[i]))):
            if str(requestors[i])[j] == "@":
                at = j
                break
        requestors[i] = str(requestors[i])[0:j]

    # format date so it's just month/day/weekday
    for i in range(len(date)):
        date[i] = str((date[i])[0:11])

    # format subject so it's just the important part
    #
    #
    detect_subj = -1
    for i in range(0, len(subj)):
        detect_subj = -1
        for j in range(0, len(valid_subj)):
            if subj[i].find(valid_subj[j]) != -1:
                detect_subj = j
                break
        if detect_subj == -1:
            subj[i] = ''
        else:
            subj[i] = valid_subj[j]

    # send all of these formatted lists to the html file to populate the board
    return render_template('home.html', title='Home', tickets=tickets, ticket_number=ticket_number, requestors=requestors, date=date, subject=subj, num_tickets=len(tickets))

'''
    updateTicket will be triggered when a card is dragged to a new column.
    it will update the subject in rt to whichever column it was dragged to.
'''
@app.route("/api/updateTicket", methods=['POST'])
def updateTicket():
    # GET the ticket number from the card that was dragged
    ticket_number = request.form['ticket_num']
    # GET the column that the card was dragged onto
    queue = request.form['new_queue']

    valid_subj = ['PRINTING ON PRINTER 1 -', 'PRINTING ON PRINTER 2 -', 'PRINTING ON PRINTER 3 -', 'PRINTING ON PRINTER 4 -', 'IN CLEANING TANK 1 -', 'IN CLEANING TANK 2 -', 'IN CLEANING TANK 3 -', 'DRYING -', 'READY FOR PICKUP -']

    t = tracker.get_ticket(ticket_number)
    prev_owner = t['Owner']
    prev_subject = t['Subject']

    # determine what subject the ticket previously had
    detect_subj = -1
    for i in range(0, len(valid_subj)):
        if prev_subject.find(valid_subj[i]) != -1:
            detect_subj = i

    # steal ticket
    if prev_owner != os.getenv("USERNAME"):
        tracker.steal(ticket_id=ticket_number)
        
    # update the subject and send update email
    if detect_subj == -1:
        split_subj = prev_subject.split('-')
        tracker.edit_ticket(ticket_id=ticket_number, Subject= (queue + split_subj[0] + "-" + split_subj[1] + "-" + split_subj[2]))  
    else:
        split_subj = prev_subject.split('-')
        tracker.edit_ticket(ticket_id=ticket_number, Subject= (queue + split_subj[1] + "-" + split_subj[2] + "-" + split_subj[3]))

    t = Timer(30.0, email, queue, ticket_number)
    t.start()  # after 30 seconds, the email function will be called

    # give ticket back to original owner
    tracker.edit_ticket(ticket_id=ticket_number, Owner=prev_owner)

    return queue

'''
    closeTickets is called when the button on the Ready for Pickup column
    is pressed. It checks which tickets are "checked" to be closed, and closes
    them.
'''
@app.route("/api/closeTickets", methods=['POST'])
def closeTickets():
    # GET tickets that are currently checked to be closed
    ticket_nums = request.form['ticket_nums']
    # JS sends the request weird so we use json.loads to fix that
    ticket_numbers = json.loads(ticket_nums)

    for i in range(0, len(ticket_numbers)):
        # steal ticket
        tracker.steal(ticket_id=ticket_numbers[i])

        # resolve ticket
        tracker.edit_ticket(ticket_id=ticket_numbers[i], Status = "Resolved")
    
    # after closing tickets, call populate to refresh the page
    populate()
    
    return ""


'''
    email sends a correspondence to requestors upon a card being dragged and dropped into
    a column for longer than 30 seconds. therefore, a requestor will not receive an email
    if the card is moved 
'''
@app.route("/api/email")
def email(queue, ticket_number):
    t = tracker.get_ticket(ticket_number)
   
    # check to make sure queue still matches ticket
    if (t['Subject'].split('-'))[0] != queue:
        return
    # send an email to the tickets dragged into the last column
    else:
        tracker.reply(ticket_id=ticket_number, text = "")


if __name__ == '__main__':
    app.run(debug=True)