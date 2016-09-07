/*function listener () {
	this.style.backgroundColor("red");
}



var cases = document.getElementsByName('td');
for (var i = 0; i < cases.length; i++) {
	cases[i].addEventListener("click", listener);
}*/

var nextSymbol = "X";

function cellClicked(){
	$(this).html(nextSymbol);

	if(nextSymbol == "X")
		nextSymbol = "0";
	else
		nextSymbol = "X";
}

$("#board td").on("click", cellClicked);