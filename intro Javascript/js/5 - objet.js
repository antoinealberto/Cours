// CREATION D'OBJET

//__________________________
// Création d'un objet littéral
//__________________________

/*
var stylo = {
    type: "bille",
    couleur: "bleu",
    marque: "Bic"
};

// Constructeur MonObjet
function MonObjet() {
    // Initialisation de l'objet
    // ...
}
// Instanciation d'un objet à partir du constructeur
var monObj = new MonObjet();
*/
/*
var stylo = {
    type: "bille",
    couleur: "bleu",
    marque: "Bic"
};

console.log("Mon stylo à " + stylo.type + " " + stylo.marque + " écrit en " + stylo.couleur);

stylo.couleur = "rouge"; // Modifie la couleur de l'encre du stylo

console.log("Mon stylo à " + stylo.type + " " + stylo.marque + " écrit en " + stylo.couleur);

stylo.prix = 2.5; // Ajout de la propriété prix à l'objet stylo

console.log("Il coûte " + stylo.prix + " euros");
*/


//__________________________
// CREATION D'UN CHIEN
//__________________________

// TODO : ajoutez ici la définition de l'objet chien
/*
var chien = {};
chien.nom = "Kenzo";
chien.race = "pekinois";
chien.taille = 75;

	chien.aboyer = function () {
		var aboiement = "Grr, Grrr;";
		return aboiement;
	}

console.log(chien.nom + " est un " + chien.race + " mesurant " + chien.taille + " cm");
console.log("Tiens, un chat ! " + chien.nom + " aboie : " + chien.aboyer());

// EXO : PLUSIEURS CHIENS ..
// TODO : ajoutez ici la définition de l'objet Chien
var Chien = {
	init: function (nom, race, taille) {
		this.nom = nom;
		this.race = race;
		this.taille = taille;
	},

	aboyer: function () {
		if (this.taille >= 50) {
			var aboiement = "Grr, Grrr;";
			return aboiement;
		} else {
			var aboiement = "Kaï, Kaïïï;";
			return aboiement;
		}
	}
}

    
var crokdur = Object.create(Chien);
crokdur.init("Crokdur", "mâtin de Naples", 75);

console.log(crokdur.nom + " est un " + crokdur.race + " mesurant " + crokdur.taille + " cm");
console.log("Tiens, un chat ! " + crokdur.nom + " aboie : " + crokdur.aboyer());

var pupuce = Object.create(Chien);
pupuce.init("Pupuce", "bichon", 22);

console.log(pupuce.nom + " est un " + pupuce.race + " mesurant " + pupuce.taille + " cm");
console.log("Tiens, un chat ! " + pupuce.nom + " aboie : " + pupuce.aboyer());
*/



//__________________________
// Création d'un compte bancaire
//__________________________

/*Ecrivez un programme compte.js qui crée un objet compte ayant les propriétés suivantes :
    Une propriété titulaire valant "Alex".
    Une propriété solde valant initialement 0.
    Une méthode crediter() ajoutant le montant passé en paramètre au solde du compte.
    Une méthode debiter() retirant le montant passé en paramètre du solde du compte.
    Une méthode decrire() renvoyant la description du compte.
Utilisez cet objet pour afficher sa description, le créditer puis le débiter de montants 
saisis successivement par l'utilisateur, puis afficher de nouveau sa description.
*/

/*
SOLUTION Exercice : compte bancaire
*/
/*
var compte = {
    titulaire: "Alex",
    solde: 0,

    // Crédite le compte d'un certain montant
    crediter: function (montant) {
        this.solde = this.solde + montant;
    },
    // Débite le compte d'un certain montant
    debiter: function (montant) {
        this.solde = this.solde - montant;
    },
    // Renvoie la description du compte
    decrire: function () {
        var description = "Titulaire : " + this.titulaire +
            ", solde : " + this.solde + " euros";
        return description;
    }
};

console.log(compte.decrire());

var credit = Number(prompt("Entrez le montant à créditer :"));
compte.crediter(credit);
console.log(compte.decrire());

var debit = Number(prompt("Entrez le montant à débiter :"));
compte.debiter(debit);
console.log(compte.decrire());
*/

/*
Par rapport à un compte bancaire, un compte épargne a la particularité de posséder 
un taux d'intérêt (exemple : 0,05 = 5%). Ce taux est utilisé pour calculer le montant des intérêts, 
qui est ensuite ajouté au solde du compte.
*/

// TODO : ajoutez ici la définition des objets nécessaires
var CompteBancaire = {
	// Initialise le compte bancaire
	initCB: function (titulaire, solde) {
		this.titulaire = titulaire;
		this.solde = solde;
	},
	// credite d'un certain montant
	crediter: function (montant) {
		this.solde = this.solde + montant;
	},
	// debite d'un certain montant
	debiter: function (montant) {
		this.solde = this.solde - montant;
	},
	// Renvoie description du compte
	decrire: function () {
		var description = "titulaire : " + this.titulaire + ", solde : " + this.solde + " euros.";
		return description;
	}
};

var CompteEpargne = Object.create(CompteBancaire);
// Initialise le compte épargne
CompteEpargne.initCE = function (titulaire, solde, tauxInteret) {
	this.initCB(titulaire, solde);
	this.tauxInteret = tauxInteret;
};

// Calcul et ajoute interet au solde
CompteEpargne.ajouterInterets = function () {
	var interets = this.solde * this.tauxInteret;
	this.solde += interets;
};


var compte1 = Object.create(CompteBancaire);
compte1.initCB("Alex", 100);

var compte2 = Object.create(CompteEpargne);
compte2.initCE("Marco", 50, 0.05);

console.log("Voici l'état initial des comptes :");
console.log(compte1.decrire());
console.log(compte2.decrire());

var montant = Number(prompt("Entrez le montant à transférer entre les comptes :"));
compte1.debiter(montant);
compte2.crediter(montant);

// Calcule et ajoute les intérêts au solde du compte
compte2.ajouterInterets();

console.log("Voici l'état final des comptes après transfert et calcul des intérêts :");
console.log(compte1.decrire());
console.log(compte2.decrire());


//__________________________
// NOTIONS d'héritage !!
//__________________________

/*var unObjet = {
    a: 2
};*/

// Crée unAutreObjet avec unObjet comme prototype

//PRINCIPE
/*
var unAutreObjet = Object.create(unObjet);

console.log(unAutreObjet.a); // Affiche 2

// Crée encoreUnObjet avec unAutreObjet comme prototype
var encoreUnObjet = Object.create(unAutreObjet);

console.log(encoreUnObjet.a); // Affiche 2
console.log(encoreUnObjet.b); // Affiche undefined
*/




//__________________________
//CREATION D'UN PERSONNAGE..
//__________________________

// Création d'un personnage version 1

/*var perso = {
    nom: "Aurora",
    sante: 150,
    force: 25,
    xp: 0,

    //définition de notre objet sous la forme d'une nouvelle propriété
    decrire: function () {
        var description = this.nom + " a " + this.sante + " points de vie et " + 
        this.force + " en force, " + this.nom + " possede egalement " + this.xp + " point d'experience !";
        return description;
    }
};

// Etat initial du personnage
console.log(perso.nom + " a " + perso.sante + " points de vie et " + perso.force + " en force, " + perso.nom + " possede egalement " + perso.xp + " point d'experience !");

// Aurora est blessée par une flèche
perso.sante = perso.sante - 20;
// Aurora trouve un bracelet de force
perso.force = perso.force + 10;
// Ajout de l'experience du personnage
perso.xp = perso.xp + 15;
*/
//console.log(perso.nom + " a " + perso.sante + " points de vie et " + perso.force + " en force");

// Ajout d'une méthode à un objet

// Renvoie la description d'un personnage (remplacer par decrire: function())
/*function decrire(personnage) {
    var description = personnage.nom + " a " + personnage.sante + " points de vie et " + personnage.force + " en force";
    return description;
}
*/
//console.log(decrire(perso));

//perso.decrire() appelle la fonction decrire() sur l'objet perso. 
//Dans ce cas, la fonction fait partie de la définition de l'objet : il s'agit d'une méthode.
/*console.log(perso.decrire());
*/

//__________________________
// Création d'un personnage version 2

/*
var Personnage = {
    nom: "",
    sante: 0,
    force: 0,
    xp: 0,

    // Renvoie la description du personnage
    decrire: function () {
        var description = this.nom + " a " + this.sante + " points de vie, " +
            this.force + " en force et " + this.xp + " points d'expérience";
        return description;
    }
};

var perso1 = Object.create(Personnage);
perso1.nom = "Aurora";
perso1.sante = 150;
perso1.force = 25;

var perso2 = Object.create(Personnage);
perso2.nom = "Glacius";
perso2.sante = 130;
perso2.force = 35;

console.log(perso1.decrire());
console.log(perso2.decrire());
*/

//__________________________
// Création d'un personnage version 3
// Ajout inventaire ..

/*
var Personnage = {
    // Initialise le personnage
    initPerso: function (nom, sante, force, piece, cle) {
        this.nom = nom;
        this.sante = sante;
        this.force = force;
        this.piece = piece;
        this.cle = cle;
    },

    // Attaque un personnage cible
    attaquer: function (cible) {
        if (this.sante > 0) {
            var degats = this.force;
            console.log(this.nom + " attaque " + cible.nom + " et lui fait " + degats + " points de dégâts");
            cible.sante = cible.sante - degats;
            if (cible.sante > 0) {
                console.log(cible.nom + " a encore " + cible.sante + " points de vie");
            } else {
                cible.sante = 0;
                console.log(cible.nom + " est mort !");
            }
        } else {
            console.log(this.nom + " ne peut pas attaquer : il est mort...");
        }
    }
};

var Joueur = Object.create(Personnage);
// Initialise le joueur
Joueur.initJoueur = function (nom, sante, force, piece, cle) {
    this.initPerso(nom, sante, force, piece, cle);
    this.xp = 0; // L'expérience du joueur est toujours initialisée à 0
    this.piece = 10;
    this.cle = 1;
};

// Renvoie la description du joueur
Joueur.decrire = function () {
    var description = this.nom + " a " + this.sante + " points de vie, " + this.force + " en force et " + this.xp + " points d'expérience, " + this.piece + " pieces d'or et " + this.cle + " cle(s).";
    return description;
};

// Combat un adversaire
Joueur.combattre = function (adversaire) {
    this.attaquer(adversaire);
    if (adversaire.sante === 0) {
        console.log(this.nom + " a tué " + adversaire.nom + " et gagne " + adversaire.valeur + " points d'expérience ainsi que " + adversaire.piece + " pieces d'or et " + adversaire.cle + " cle.");
        this.xp += adversaire.valeur;
        this.piece += adversaire.piece;
        this.cle += adversaire.cle;
    }
};


var Adversaire = Object.create(Personnage);
// Initialise l'adversaire
Adversaire.initAdversaire = function (nom, sante, force, piece, cle, race, valeur) {
    this.initPerso(nom, sante, force, piece, cle);
    this.race = race;
    this.valeur = valeur;
};

var joueur1 = Object.create(Joueur);
joueur1.initJoueur("Aurora", 150, 25);

var joueur2 = Object.create(Joueur);
joueur2.initJoueur("Glacius", 130, 30);

console.log("Bienvenue dans ce jeu d'aventure ! Voici nos courageux héros :");
console.log(joueur1.decrire());
console.log(joueur2.decrire());

var monstre = Object.create(Adversaire);
monstre.initAdversaire("ZogZog", 40, 20, 10, 1, "orc", 10);

console.log("Un affreux monstre arrive : c'est un " + monstre.race + " nommé " + monstre.nom);


monstre.attaquer(joueur1);
monstre.attaquer(joueur2);

joueur1.combattre(monstre);
joueur2.combattre(monstre);

console.log(joueur1.decrire());
console.log(joueur2.decrire());*/





