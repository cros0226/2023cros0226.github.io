
//Adopted from IOA Tutorial (Assignment 3):

//Used to structure pages 3&4:

var infoDivs=document.getElementsByClassName("infoDivs");

function displayInfo(index) {
	for (var i=0; i < infoDivs.length; i++) {
		infoDivs[i].style.display = "none";
	}
	infoDivs[index].style.display = "block";
}



//New functions (Personal Additions):


//Index - Text/Image 'Loop':

function introappear() {
	document.getElementById("textcontainer1")
	.style.display = "block";
}

function musesappear() {				//Cool that you can add multiple at once; revisit: possible to incorporate a delay?
	document.getElementById("muses")
	.style.display = "block";
	document.getElementById("speech1")
	.style.display = "block";
	document.getElementById("textcontainer1")
	.style.display = "none";

}

function speech2appear() {
	document.getElementById("speech2")
	.style.display = "block";
	document.getElementById("speech1")
	.style.display = "none";
}

function speech3appear() {
	document.getElementById("speech3")
	.style.display = "block";
	document.getElementById("speech2")
	.style.display = "none";
}


function musesdisappear() {
	document.getElementById("muses")
	.style.display = "none";
	document.getElementById("speech3")
	.style.display = "none";
	document.getElementById("textcontainer1")
	.style.display = "block";
}


//Page 2

function changes() {
	alert("Penultimate update 06/02/23. Minor changes made for site functionality, content remains the same.")
}

//Page 2a

function watchparty() {
	alert("This movie is fun to watch by yourself or with friends. Schedule a watch party!")
}

//Page 3
function byetree() {
	document.getElementById("tree")
	.style.display = "none";
}


//Page 4
function byelabours() {
	document.getElementById("labours")
	.style.display = "none";
}


