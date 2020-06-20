function populateModal(theForm){
    //populate ticketid
    var ticketId = theForm.innerText.substring(0, 5); 
    document.getElementById("modal-ticketid").innerHTML = "ID: " + ticketId; 
}