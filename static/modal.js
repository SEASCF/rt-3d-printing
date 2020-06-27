function populateModal(theForm){
    //populate already had info
    var ticketId = theForm.innerText.substring(0, 5); 
    var dateCreated = theForm.innerText.substring(8,18); 
    var requestorName = theForm.innerText.substring(19); 

    document.getElementById("modal-ticketid").innerHTML = "ID: " + ticketId; 
    document.getElementById("modal-ticketdc").innerHTML = "Date Created: " + dateCreated; 
    document.getElementById("modal-ticketreq").innerHTML = "Requestor: " + requestorName; 

    $.post( "/api/populate", {
        ticket_num: ticketId
      });
}
