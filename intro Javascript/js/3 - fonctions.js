/*  -----------------------------------
Exercice : SAISIE
-------------------------------------- */
/*
function direBonjour(prenom) {
    var message = "Bonjour, " + prenom + " !";
    return message;
}

console.log(direBonjour("Baptiste"));
console.log(direBonjour("Sophie"));
*/

/*
function direBonjour() {
    var message = "Bonjour !";
    return message;
}

console.log(direBonjour());
*/
/*
// Renvoie un message de bienvenue
function direBonjour(prenom, nom) {
	var message = "Bonjour, " + prenom + " " + nom + " !";
    return message;
}

// TODO : faire saisir le prénom et le nom de l'utilisateur
// TODO : appeler direBonjour() avec les bons arguments et afficher son résultat
	var prenom = prompt("Saisir votre prenom : ");
	var nom = prompt("Saisir votre nom : ");

	alert(direBonjour(prenom, nom));
*/

/*	
// Renvoie le carré d'un nombre
function carre(x) {
  // TODO : compléter le code de la fonction
	//console.log(x * x); -> return undefined entre chaque operation
	return x * x;
}

console.log(carre(0)); // Doit afficher 0
console.log(carre(2)); // Doit afficher 4
console.log(carre(5)); // Doit afficher 25

for (var i = 0; i <= 10; i++) {
	console.log(carre(i))
}
*/
/*
// TODO : écrire la fonction min()
function min(x,y) {
	return Math.min(x,y);
}

ou 

function min(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

console.log(min(4.5, 5)); // Doit afficher 4.5
console.log(min(19, 9)); // Doit afficher 9
console.log(min(1, 1)); // Doit afficher 1
*/




/*
// TODO : écrire la fonction calculer()

// Renvoie le résultat d'un calcul
function calculer(operandeGauche, operation, operandeDroite) {
    var resultat;
    switch (operation) {
    case "+":
        resultat = operandeGauche + operandeDroite;
        break;
    case "-":
        resultat = operandeGauche - operandeDroite;
        break;
    case "*":
        resultat = operandeGauche * operandeDroite;
        break;
    case "/":
        resultat = operandeGauche / operandeDroite;
        break;
    }
    return resultat;
}

console.log(calculer(4, "+", 6)); // Doit afficher 10
console.log(calculer(4, "-", 6)); // Doit afficher -2
console.log(calculer(2, "*", 0)); // Doit afficher 0
console.log(calculer(12, "/", 0)); // Doit afficher Infinity
*/




// TODO : écrire le calcul d'un perimetre et de l'aire d'un cercle

	
//P = pi × d
//A = pi × r² 	

function perimetre(rayon) {
	return 2 * rayon * Math.PI;
}

function aire(rayon) {
    return Math.pow(rayon, 2) * Math.PI;
}

var r = Number(prompt("saisir rayon du cercle :"));
alert("Le perimetre de votre est de : " + perimetre(r) + " cm et l'aire est de : " + aire(r) + " cm");








