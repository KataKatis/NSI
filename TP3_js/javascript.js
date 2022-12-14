// EXERCICE 2 BIS : Demande autant de note qu'il le faut, s'arrete quand rien n'est tape

var nom, note, moyenne, count;
note = moyenne = count = 0;
do {
	nom = prompt('Inscrit ton nom (obligatoire): ');
} while (nom == "");
while (!isNaN(note)) {
	moyenne += note;
	count += 1;
	note = parseFloat(prompt('Note (moyenne actuelle = ' + (moyenne/(count-1)) + '): '));
}
average = (moyenne/(count-1))
if (average >= 10) {
	var msg = "Votre moyenne finale est: " + average + ". Vous êtes admis ";
	switch (true) {
		case average == 10:
			msg += "avec mention: sniper";
			break;
		case average >= 18:
			msg += "avec mention: Excellent";
			break;
		case average >= 16:
			msg += "avec mention: Félécitation";
			break;
		case average >= 14:
			msg += "avec mention: Bien";
			break;
		default:
			msg += "sans mention.";
			break;
	}
	alert(msg);
	document.write(msg);
} else {
	alert('Votre moyenne finale est: ' + average + ". Vous n'êtes pas admis.");
	document.write('Votre moyenne finale est: ' + average + ". Vous n'êtes pas admis.");
}

// EXERCICE 2

// var nom, note1, note2, note3;
// nom = prompt('M.CHACOUCHE -- Toi levez toi, donner moi ton nom: ')
// note1 = parseFloat(prompt('Note 1 (sur 20) : '));
// note2 = parseFloat(prompt('Note 2 (sur 20) : '));
// note3 = parseFloat(prompt('Note 3 (sur 20) : '));
// moyenne = (note1 + note2 + note3) / 3;
// alert("Votre moyenne sur 20 est : " + moyenne);
// document.write("Votre moyenne sur 20 est: " + moyenne);


// EXERCICE 1


// var a, b, produit, somme;
// a = prompt('Donnez un nombre : ');
// b = prompt('Donnez un autre nombre : ');
// a = parseFloat(a);
// b = parseFloat(b);
// produit = a*b;
// somme = a+b
// alert("Le produit est " + produit + ', et la somme est ' + somme);
// document.write("Le produit est " + produit + ", et la somme est " + somme);