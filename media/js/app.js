/* Variables Global */
var etatCases = {
	"a1":null,
	"b1":null,
	"c1":null,
	"a2":null,
	"b2":null,
	"c2":null,
	"a3":null,
	"b3":null,
	"c3":null,
}


var turnPlay = 9;


// variable joueur 0 ou joueur 1
var joueur = 0;

var nextSymbol = "0";

// Vérifie l'état de la case
function checkLibre($case) {
	var idCase = $case.attr('id');
	console.log(idCase);
	console.log(etatCases);
	
	if(etatCases[idCase] == null)
		etat = true;
	else
		etat = false;
	return etat;
}

function enregistreAction ($case) {
	etatCases.idCase = joueur;
}

function checkVictory () {
	var gameOver = false;
	if($("#a1").html() != "" && ($("#a1").html() == $("#b1").html() && $("#a1").html() == $("#c1").html())){
		gameOver = true;
		alert("victoire : " + $("#a1").html());
	}
	else if($("#a2").html() != "" && ($("#a2").html() == $("#b2").html() && $("#a2").html() == $("#c2").html())){
		gameOver = true;
		alert("victoire : " + $("#a2").html());
	}
	else if($("#a3").html() != "" && ($("#a3").html() == $("#b3").html() && $("#a3").html() == $("#c3").html())){
		gameOver = true;
		alert("victoire : " + $("#a3").html());
	}
	else if($("#a1").html() != "" && ($("#a1").html() == $("#a2").html() && $("#a1").html() == $("#a3").html())){
		gameOver = true;
		alert("victoire : " + $("#a1").html());
	}
	else if($("#b1").html() != "" && ($("#b1").html() == $("#b2").html() && $("#b1").html() == $("#b3").html())){
		gameOver = true;
		alert("victoire : " + $("#b1").html());
	}
	else if($("#c1").html() != "" && ($("#c1").html() == $("#c2").html() && $("#c1").html() == $("#c3").html())){
		gameOver = true;
		alert("victoire : " + $("#c1").html());
	}

	else if($("#a1").html() != "" && ($("#a1").html() == $("#b2").html() && $("#a1").html() == $("#c3").html())){
		gameOver = true;
		alert("victoire : " + $("#a1").html());
	}
	else if($("#a3").html() != "" && ($("#a3").html() == $("#b2").html() && $("#a3").html() == $("#c1").html())){
		gameOver = true;
		alert("victoire : " + $("#a3").html());
	}else if(turnPlay == 0){
		gameOver = true;
		alert("match null");
	}

	if(gameOver){
		$("#board td").off("click", cellClicked);
	}
}

// Actions lors du clique
function cellClicked(){
	// console.log($(this));
	var estLibre = checkLibre($(this));
	console.log(estLibre);
	console.log(etatCases);
	

	// if(estLibre){
	if($(this).html() == ""){
		enregistreAction($(this));

		$(this).html(nextSymbol);

		if(joueur == 1){
			nextSymbol = "0";
			joueur = 0;
		}
		else{
			nextSymbol = "X";
			joueur = 1;
		}

		turnPlay--;

		checkVictory();


	}

	//console.log(etatCases);
	
}
// Ecoute les cases pour pouvoir cliquer
$("#board td").on("click", cellClicked);

 function init(){
	turnPlay = 9;
	joueur = 0;
	nextSymbol = "0";
	$("#board td").empty();
	$("#board td").on("click", cellClicked);
};

$("#new_game").on("click", init);

init();