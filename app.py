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
    tickets = tracker.search(Queue='3 D printing', Status='stalled', Format= 's')
    requestors = []
    date = []
    ticket_number = []
    at = 0

    # grab all ticket numbers
    for ticket in tickets:
        ticket_number.append(ticket["numerical_id"])
    
    # get requestor and date with ticket number
    for num in ticket_number:
        t = tracker.get_ticket(num)
        requestors.append(t["Requestors"])
        date.append(t["Created"])

    # format requestor name so that it is just the netid
    for i in range(len(requestors)):
        requestors[i] = str(requestors[i]).strip("[]")
        requestors[i] = str(requestors[i]).strip("''")
        for j in range(len(str(requestors[i]))):
            if str(requestors[i])[j] == "@":
                at = j
                break
        requestors[i] = str(requestors[i])[0:j]

    # format date so its just month/day/weekday
    for i in range(len(date)):
        date[i] = str((date[i])[0:11])

    return render_template('home.html', title='Home', tickets=tickets, ticket_number=ticket_number, requestors=requestors, date=date, num_tickets=len(tickets))

@app.route("/api/updateTicket", methods=['POST'])
def updateTicket():
    jsdata = request.form['new_queue']
    print("\n NEW QUEUE == ", jsdata)
    return jsdata
    
if __name__ == '__main__':
    app.run(debug=True)