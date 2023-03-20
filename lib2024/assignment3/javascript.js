//Element List:

	//Get Class Element infoDivs:
	var infoDivs = document.getElementsByClassName("infoDivs");


//Function List:

	//Allow Cycle through Index Options (from IOA):
	function displayInfo(index) {

		//Part one: hide all options (using fun math loop)
		for (var i=0; i < infoDivs.length; i++) {
		infoDivs[i].style.display = "none" ;
		}

		//Part two: show only the option the user clicks on
		infoDivs[index].style.display = "block";

	}


function alertbox() {
	alert("Do you want to steal my gold? Click on the rainbow!")
}	


function goldappear() {
	document.getElementById("PotofGold")
	.style.display = "block";
}

function golddisappear() {
	document.getElementById("PotofGold")
	.style.display = "none";
}
