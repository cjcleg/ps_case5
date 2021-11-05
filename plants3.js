/*

    Case Project 

    Author: Carla Cleghorn
    Date: 2-8-21

    Filename: plants3.js

  */

  //onclick = "checkInput"


function checkName() {
	var message, x; 
	message = document.getElementById("disErr");
	message.innerHTML = ""; 
	x = document.getElementById("name").value;
  	
	try {
		//check that x is not an empty value and it it returns true throw error message 
		if (x == "") throw "please enter your name.";
		if (x = Number(x))  throw "please enter your name.";
	}
	catch(err) {
		message.innerHTML = err; 
	}
}  
	catch(message) {
		validity = false;
		messageText = message; 
		acresBox.value = ""; // remove erroneous entry from input box 
	}
	finally{
		acresComplete = validity; 
		messageElement.innerHTML = messageText;
		messageHeadElement.innerHTML = ""; //remove any former recommendation heading
		testFormCompleteness();
	}  
}