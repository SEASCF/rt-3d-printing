
var checkedBoxes = [];
//used whenever checked box gets checked
function myFuncCheck(theForm){
	var ticketId = theForm.innerText.substring(0, 5); 
	var idTags = document.getElementsByTagName("div"); 
	var searchText = ticketId; 
	var found; 

	for (var i = 0; i < idTags.length; i++) { 
 		 if (idTags[i].textContent === searchText) {
  		 	found = idTags[i];
			console.log(found); 
   		 	break;
  		}
	}
	//on check the ticket number gets crossed out 
	if(found.id == "color") {
		found.id="job-name";
		checkedBoxes.pop((found.innerText).substring(0,5));
	}
	else{
		found.id="color";
		checkedBoxes.push((found.innerText).substring(0,5));
	}	
}
//used to closed the checked tickets
function sendCheckedBoxes() {

	$.post( "/api/closeTickets", {
		ticket_nums: JSON.stringify(checkedBoxes)
	});

	window.location.reload(true);
}
