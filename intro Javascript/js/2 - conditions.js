/*
var nombre = Number(prompt("Entrez un nombre :"));

if (nombre > 0) {
    console.log(nombre + " est positif");
} else { // nombre <= 0
    if (nombre < 0) {
        console.log(nombre + " est négatif");
    } else { // nombre === 0
        console.log(nombre + " est nul");
    }
}

var meteo = prompt("Quel temps fait-il dehors ?");
switch (meteo) {
case "soleil":
    console.log("Sortez en t-shirt.");
    break;
case "vent":
    console.log("Sortez en pull.");
    break;
case "pluie":
    console.log("Sortez en blouson.");
    break;
case "neige":
    console.log("Restez au chaud à la maison.");
    break;
default:
    console.log("Je n'ai pas compris !");
}
*/

/*  -----------------------------------
Exercice : afficher le jour suivant
-------------------------------------- */
/*
var jour = prompt("Choisissez un jour de la semaine")
switch (jour) {
	if (jour === lundi) {console.log("Demain nous serons mardi !")};
	if (jour === mardi) {console.log("Demain nous serons mercredi !")};
	if (jour === mercredi) {console.log("Demain nous serons jeudi !")};
	if (jour === jeudi) {console.log("Demain nous serons vendredi !")};
	if (jour === vendredi) {console.log("Demain nous serons samedi !")};
	if (jour === samedi) {console.log("Demain nous serons dimanche !")};
	if (jour === dimanche) {console.log("Demain nous serons lundi !")};
	else {console.log("Votre choix n'existe pas dans le calendrier !")};
}

var jour = prompt("Choisissez un jour de la semaine");

switch (jour) {
	case "lundi" :
		console.log("Demain nous serons mardi !");
		break;
	case "mardi" :
		console.log("Demain nous serons mercredi !");
		break;
	case "mercredi" :
		console.log("Demain nous serons jeudi !");
		break;
	case "jeudi" :
		console.log("Demain nous serons vendredi !");
		break;
	case "vendredi" :
		console.log("Demain nous serons samedi !");
		break;
	case "samedi" :
		console.log("Demain nous serons dimanche !");
		break;
	case "dimanche" :
		console.log("Demain nous serons lundi !");
		break;
	default :
		console.log("Votre choix n'existe pas dans le calendrier !");
}
*/


/* 
Exercice : afficher l'heure une seconde plus tard
*/
/*
var heures = Number(prompt("Entrez les heures :"));
var minutes = Number(prompt("Entrez les minutes :"));
var secondes = Number(prompt("Entrez les secondes :"));

// On teste tous les cas d'erreur
if ((heures >= 0) && (heures <= 23) && (minutes >= 0) && (minutes <= 59) &&
    (secondes >= 0) && (secondes <= 59)) {
    secondes++; // On incrémente les secondes
    if (secondes === 60) {
        // Il faut mettre les secondes à 0 et passer à la minute suivante
        secondes = 0;
        minutes++;
        if (minutes === 60) {
            // Il faut mettre les minutes à 0 et passer à l'heure suivante
            minutes = 0;
            heures++;
            if (heures === 24) { // L'heure suivante est minuit
                heures = 0;
            }
        }
    }
    console.log("Dans une seconde, il sera " + heures + " heures, " +
        minutes + " minutes et " + secondes + " secondes");
} else {
    console.log("Heure incorrecte !");
}
*/


/*  -----------------------------------
Exercice : BOUCLE WHILE & FOR
-------------------------------------- */
/*
for (var lettre = ""; lettre !== "X" && lettre !== "x";) {
    lettre = prompt("Tapez une lettre ou X pour sortir :");
    console.log(lettre);
}


for (var tour = 1; tour <= 5; tour++) {
    console.log("Tour de manege numero : " + tour);
    //compteur++; // La variable est modifiée dans le corps de la boucle
}

/*  -----------------------------------
Exercice : TOUR MANEGE
-------------------------------------- */
/*
for (var tour = 1; tour <= 5;) {
    tour = prompt("choisir un chiffre entre 1 et 5");
	if (tour > 5) {
		console.log("Erreur de saisie")
	} else {
		while (tour <= 5) {
	        console.log("tour numero : " + tour);
			tour++;
	    }
	}
}


var nbTours = Number(prompt("Combien de tours veux-tu faire, mon petit ?"));

var tour = 1;
while (tour <= nbTours) {
    console.log("C'est le tour numéro " + tour);
    tour++;
}
*/

/* -----------------------------------
Exercice : table de multiplication
*/
/*
var nombre = 0; // Valeur par défaut permettant d'entrer dans la boucle
while ((nombre < 2) || (nombre > 19)) {
    nombre = Number(prompt("Entrez un nombre entre 2 et 9 : "));
}

console.log("Voici la table de multiplication de " + nombre);
var i = 1;
while (i <= 10) {
    console.log(nombre + " x " + i + " = " + (nombre * i));
    i++;
}
*/
/*  -----------------------------------
Exercice : FIZZ BUZZ
-------------------------------------- */
/*
for (var i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i + " est pair");
    }
}
*/
/*
for (var i = 1; i <= 40; i++) {
	if ((i % 3 === 0)&&(i % 5 === 0)) {
		console.log(i + " est FIZZBUZZ");
	} else if (i % 3 === 0) {
        console.log(i + " est FIZZ");
    } else if (i % 5 === 0) {
		console.log(i + " est BUZZ");
	} else {
		console.log(i);
	}
}

/*
var i = 1;
while (i < 40) {
	console.log(i);
	i++;
	if (i % 3 === 0) {
        console.log(i + " est FIZZ");
    } else if (i % 5 === 0) {
		console.log(i + " est BUZZ");
	} else {
		console.log(i);
	}
}

*/

// Solution construisant le message à afficher par concaténation

for (var nombre = 1; nombre <= 100; nombre++) {
    var message = ""; // Message à afficher, initialement vide

    if (nombre % 3 === 0) {
        // Nombre divisible par 3 : on ajoute "Fizz" au message
        message += 'Fizz';
    }
    if (nombre % 5 === 0) {
        // Nombre divisible par 5 : on ajoute "Buzz" au message
        message += 'Buzz';
    }
    if (message === "") {
        // Si message est vide, le nombre n'est divisible ni par 3, ni par 5 :
        // le message affiché sera le nombre
        message = nombre;
    }
    console.log(message);
}






