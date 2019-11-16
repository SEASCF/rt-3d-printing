from __future__ import print_function
import rt

tracker = rt.Rt('https://ticket.seas.gwu.edu/rt/REST/1.0/', '3dprintingtest', 'changeme', verify_cert=False)
try:
    tracker.login()

except Exception, e:
    print("Could not log in, error: " + e)

else:
    print("Successfully logged in.")

tickets = tracker.search(Queue='3 D printing', Status='open', Format= 's')

id = tracker.create_ticket(Queue= 'Test', Subject= 'Testing rt app but in the meeting', Requestors = 'rebeccalshanley@gwu.edu')

tracker.edit_ticket(id, Subject = 'testing update')
# print each ticket on a separate line
print(*tickets, sep = "\n")

# todo: figure out how to update tickets list when a new ticket is submit
# todo: test update ticket feature
# todo: begin documentation- translate these todos to issues on github
