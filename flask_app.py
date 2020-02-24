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

tickets = tracker.search(Queue='3 D printing', Status='open', Format= 's')

@app.route("/api/ticketMovedQueue")
def hello(data):
    data.ticket
    print('hello')

@app.route("/")
@app.route("/home")
def home():
    return render_template('home.html', tickets=tickets)

if __name__ == '__main__':
    app.run(debug=True)
