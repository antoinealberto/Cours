/*
var nom = prompt("Nom : "); 
var prenom = prompt("Prenom : ");
var id = nom + " " + prenom
alert("Bonjour, " + id);


var rayon = 5.5;
var pi = 3.14;
var perimetre = 2 * pi * rayon;
alert(perimetre);

var a = 2;
a = a - 1;
a++;
var b = 8;
b += 2;
var c = a + b * b;
var d = a * b + b;
var e = a * (b + b);
var f = a * b / a;
var g = b / a * a;

var saisie = prompt("Entrez un nombre : "); // saisie est de type chaîne
var nb = Number(saisie); // nb est de type nombre
*/

var prixHT = Number(prompt("Entrez le prix HT :"));
var tauxTVA = 19.6 / 100;
var prixTTC = prixHT * (1 + tauxTVA);
var totalTTC = (prixTTC + " euros");

console.log("votre montant ttc est de " + totalTTC + " euros");
