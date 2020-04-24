function doalert(checkboxElem) {
  if (checkboxElem.checked) {
	alert("checked")
	document.getElementById("checked").setAttribute("id","color");   
  } else {
       alert("notchecked")
	  document.getElementById("color").setAttribute("id","checked");
  }
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

// Call as
//var checkedBoxes = getCheckedBoxes("mycheckboxes");
