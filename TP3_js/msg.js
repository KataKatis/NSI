var name = prompt("Entre un nom");

switch (true) {
	case name == "Usman":
		document.write("<p>bravo Usman t'es un bon délégué</p>");
		break;
	case name == "Raphael":
		document.write("<p>Raphael t'as un magnifique sac Mickey</p>");
		break;
	case name == "Arsene":
		document.write("<p>Ching ding ding dong</p>");
		break;
	case name == "Brayane":
		document.write("<p>Genreuuu en modeeuuu bonne année</p>");
		break;
	case name == "Akiki":
		document.write("<p>Le libanais</p>");
		break;
	case name == "Maxence":
		document.write("<p>joyeux noël</p>");
		break;
	case name == "Arys":
		document.write("<p>joyeux noël</p>");
		break;
	case name == "Louis":
		document.write("<p>Passe de bonnes vacances Victor</p>");
		break;
	case name == "Victor":
		document.write("<p>Passe de bonnes vacances Louis</p>");
		break;
	case name == "Marjane":
		document.write("<p>Hésite pas à aider Dani en NSI</p>");
		break;
	default:
		document.write("<p>Prénom incorrect</p>");
		break;
}