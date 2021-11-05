/*

    Chapter 1 Case Project 

    Author: Carla Cleghorn
    Date: 2-1-21

    Filename: index.html

  */
  //creates a new function to determine the day of the week 
  function findDate(){
  	
  	//declares a new var called day
  	var n;
  	 //create a new Date object to get the current date and use the getDay method
  	 //to return the day of week as a number 1-6
  	 //uses a switch statement to check the results of the getDay method against
  	//case values that correspond to the days of the week by name 
  	//and assigns the resulting value to var day
  	/*switch (new Date().getDay()) {
  		case 0:
    		day = "Sunday";
    		break;
    	case 1:
    		day = "Monday";
    		break;
    	case 2:
    		day = "Tuesday";
    		break;
    	case 3:
    		day = "Wednesday";
    		break;
    	case 4:
    		day = "Thursday";
    		break;
    	case 5:
    		day = "Friday";
    		break;
    	case 6:
    		day = "Saturday";
	}		*/
  	
  	//creates a new date object with the current date and assigns it to variable d 
  	var d = new Date();
  	//creates a var array literal called weekday that contains values equating to the days of the week 
  	var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  	//uses the getDay method to return the day of week from 0-6 and
  	// creates var n which stores the index of the weekday array corresponding to results of getDay method 
  	var n = weekday[d.getDay()];
  }
//creates a function showDate that displays a message on the home page 
//with a different plant/fun fact of the day depending what day it is 
function showDate(){
	document.getElementById("day").innerHTML = n;
/*	//showDate uses an if else if statement to check the value of var day
	//and print a message depending on which day it is. 
	if (day = "Sunday") {
		document.getElementById("day").innerHTML = "It's Snake Plant Sunday!";
	} else if (day = "Monday") {
		document.getElementById("day").innerHTML = "It's Monstera Monday!";
	} else if (day = "Tuesday"){
		document.getElementById("day").innerHTML = "";
	} else if (day = "Wednesday"){
		document.getElementById("day").innerHTML = "";
	} else if (day = "Thursday"){
		document.getElementById("day").innerHTML = "";
	} else if (day = "Friday"){
		document.getElementById("day").innerHTML = "";
	}else if (day = "Saturday"){
		document.getElementById("day").innerHTML = "";
 	}*/
}

//creates a function which calls the 2 previous functions 

function plantOfTheDay(){
	findDate();
	showDate();
}

//creates an event listener that calls the plantOfTheDay function upon the home page loading 


if (window.addEventListener) {
	window.addEventListener("load", plantOfTheDay, false);
} else if (window.attachEvent) {
	window.attachEvent("onload", plantOfTheDay);
}


//document.getElementById("day").innerHTML = n;