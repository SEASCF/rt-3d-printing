function populateModal(theForm){
    //populate already had info
    var ticketId = theForm.innerText.substring(0, 5); 
    var dateCreated = theForm.innerText.substring(8,18); 
    var requestorName = theForm.innerText.substring(19); 
    console.log(theForm.innerText); 

    document.getElementById("modal-ticketid").innerHTML = "ID: " + ticketId; 
    document.getElementById("modal-ticketdc").innerHTML = "Date Created: " + dateCreated; 
    document.getElementById("modal-ticketreq").innerHTML = "Requestor: " + requestorName; 
}
