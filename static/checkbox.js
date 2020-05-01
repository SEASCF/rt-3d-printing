
var fruits = [];
var notFruits = []; 
var checkedBoxes = [];
function doalert(checkboxElem) {
  if (checkboxElem.checked) {
	alert("checked")
// 	fruits.push(checkboxElem);
// 	var needToRemove = notFruits.includes(checkboxElem);
// 	 if(needToRemove===true){
// 		//remove from notFruits
// 		var index = notFruits.indexOf(checkboxElem);
// 		 notFruits.splice(index,1); 
// 	}
	//document.getElementById("checked").setAttribute("id","color");   
  } else {
       alert("notchecked")
//        notFruits.push(checkboxElem); 
//         var needToRemove = fruits.includes(checkboxElem);
//         if(needToRemove===true){
//                 //remove from fruits
//                  var index = fruits.indexOf(checkboxElem);
// 		fruits.splice(index,1); 
//         }
	//document.getElementById("color").setAttribute("id","checked");
  }
//   for(var i=0; i<fruits.length;i++){
// 	document.getElementById(fruits[i].id).setAttribute("id","color");   
// 	//change id
//   }
//   for(var j=0; j<notFruits.length;j++){
// 	//reset id
// 	document.getElementById(notFruits[j].id).setAttribute("id","checked"); 
//   }
//   console.log(fruits); 
}
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
