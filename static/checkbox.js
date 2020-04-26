var fruits = [];
var notFruits = []; 
function doalert(checkboxElem) {
  if (checkboxElem.checked) {
	alert("checked")
	fruits.push(checkboxElem);
	var needToRemove = notFruits.includes(checkboxElem);
	 if(needToRemove===true){
		//remove from notFruits
		var index = notFruits.indexOf(checkboxElem);
		 notFruits.splice(index,1); 
	}
	//document.getElementById("checked").setAttribute("id","color");   
  } else {
       alert("notchecked")
       notFruits.push(checkboxElem); 
        var needToRemove = fruits.includes(checkboxElem);
        if(needToRemove===true){
                //remove from fruits
                 var index = fruits.indexOf(checkboxElem);
		fruits.splice(index,1); 
        }
	//document.getElementById("color").setAttribute("id","checked");
  }
  for(var i=0; i<fruits.length;i++){
	//change id
  }
  for(var j=0; j<notFruits.length;j++){
	//reset id
  }
  console.log(fruits); 
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
