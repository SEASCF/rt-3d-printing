
var checkedBoxes = [];

// Pass the checkbox name to the function
function getCheckedBoxes(checkboxElem) {
  var checkboxes = document.getElementsByName(checkboxElem);
  var checkboxesChecked = [];
  // loop over them all
  for (var i=0; i<checkboxes.length; i++) {
     // And stick the checked ones onto an array...
     if (checkboxes[i].checked) {
        checkboxesChecked.push(checkboxes[i]);
     }
  }
  // Return the array if it is non-empty, or null
  if(checkboxesChecked != null){
	console.log(checkboxesChecked); 
  }
}

function myFuncCheck(theForm){
	var ticketId = theForm.innerText.substring(0, 5); 
	var idTags = document.getElementsByTagName("div"); 
	var searchText = ticketId; 
	var found; 
	console.log(idTags); 
	for (var i = 0; i < idTags.length; i++) { 
 		 if (idTags[i].textContent === searchText) {
  		 	found = idTags[i];
			console.log(found); 
   		 	break;
  		}
	}
	if(found.id == "color") {
		found.id="job-name";
		checkedBoxes.pop((found.innerText).substring(0,5));
	}
	else{
		found.id="color";
		checkedBoxes.push((found.innerText).substring(0,5));
	}
	console.log(theForm); 
	
}

function sendCheckedBoxes() {

	$.post( "/api/closeTickets", {
		ticket_nums: JSON.stringify(checkedBoxes)
	});

	window.location.reload(true);
}
