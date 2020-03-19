from flask import Flask, render_template, url_for
import rt

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
    requestors = []
    date = []
    ticket_number = []

    for ticket in tickets:
        ticket_number.append(ticket["numerical_id"])
    for num in ticket_number:
        t = tracker.get_ticket(num)
        requestors.append(t["Requestors"])
        date.append(t["Created"])

    return render_template('home.html', title='Home', tickets=tickets, ticket_number=ticket_number, requestors=requestors, date=date)

if __name__ == '__main__':
    app.run(debug=True)