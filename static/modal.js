function populateModal(theForm){
    //populate already had info
    var stringtext = theForm.innerText.split("\n"); 
    var ticketId = stringtext[3]; 
    var owner = stringtext[0]; 
    var status = stringtext[1]; 
    var dateCreated = stringtext[6]; 
    var requestorName = stringtext[7];
    var subject = stringtext[2]; 
    console.log(stringtext);
    document.getElementById("modal-tickettitle").innerHTML = subject; 
    document.getElementById("modal-ticketid").innerHTML = "ID: " + ticketId; 
    document.getElementById("modal-ticketdc").innerHTML = "Date Created: " + dateCreated; 
    document.getElementById("modal-ticketreq").innerHTML = "Requestor: " + requestorName; 
    document.getElementById("modal-ticketstatus").innerHTML = "Owner: " + owner; 
    document.getElementById("modal-ticketowner").innerHTML = "Status: " + status; 
    //document.getElementById("modal-ticketattachment").innerHTML = "Attachment: " + <a href= "{status}"> + "Download Link" + </a>; 
}
