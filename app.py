from flask import Flask, render_template, url_for, request
import json, rt

app = Flask(__name__)

tracker = rt.Rt('https://ticket.seas.gwu.edu/rt/REST/1.0/', '3dprintingtest', 'changeme', verify_cert=False)
try:
    tracker.login()

except Exception as e:
    print("Could not log in, error: " + e)

else:
    print("Successfully logged in.")

@app.route("/api/populate")
@app.route("/")
def populate():
    tickets = tracker.search(Queue='3 D printing', Status='open', Format= 's')
    tickets.extend(tracker.search(Queue='3 D printing', Status='new', Format= 's'))
    valid_subj = ['PRINTING ON PRINTER 1', 'PRINTING ON PRINTER 2', 'PRINTING ON PRINTER 3', 'PRINTING ON PRINTER 4', 'IN CLEANING TANK 1', 'IN CLEANING TANK 2', 'IN CLEANING TANK 3', 'DRYING', 'READY FOR PICKUP',]
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

@app.route("/api/updateTicket", methods=['POST'])
def updateTicket():
    queue = request.form['new_queue']
    ticket_number = request.form['ticket_num']

    valid_subj = ['PRINTING ON PRINTER 1 -', 'PRINTING ON PRINTER 2 -', 'PRINTING ON PRINTER 3 -', 'PRINTING ON PRINTER 4 -', 'IN CLEANING TANK 1 -', 'IN CLEANING TANK 2 -', 'IN CLEANING TANK 3 -', 'DRYING -', 'READY FOR PICKUP -',]

    t = tracker.get_ticket(ticket_number)
    prev_owner = t['Owner']
    prev_subject = t['Subject']

    # determine what subject the ticket previously had
    detect_subj = -1
    for i in range(0, len(valid_subj)):
        if prev_subject.find(valid_subj[i]) != -1:
            detect_subj = i

    # steal ticket
    tracker.steal(ticket_id=ticket_number)

    # update the subject
    if detect_subj == -1:
        split_subj = prev_subject.split('-')
        tracker.edit_ticket(ticket_id=ticket_number, Subject= (queue + split_subj[0] + "-" + split_subj[1] + "-" + split_subj[2]))   
    else:
        split_subj = prev_subject.split('-')
        tracker.edit_ticket(ticket_id=ticket_number, Subject= (queue + split_subj[1] + "-" + split_subj[2] + "-" + split_subj[3]))   

    # give ticket back to original owner
    tracker.edit_ticket(ticket_id=ticket_number, Owner=prev_owner)

    return queue

if __name__ == '__main__':
    app.run(debug=True)