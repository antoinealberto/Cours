// Tableaux

//____________________
// Mauvaises methodes :
/*
var film1 = "Le loup de Wall Street";
var film2 = "Vice-Versa";
var film3 = "Babysitting";
// ...

var films = "Le loup de Wall Street - Vice-Versa - Babysitting - ...";
// ...

var films = {
    film1: "Le loup de Wall Street",
    film2: "Vice-Versa",
    film3: "Babysitting",
};*/
// ...


//____________________
// Methode | Declarations ..
// on declare un tableau avec [..,..]

/*
var films = ["Le loup de Wall Street", "Vice-Versa", "Babysitting"];

// Obtenir la taille d'un tableau

var films = ["Le loup de Wall Street", "Vice-Versa", "Babysitting"];
console.log(films.length); // Affiche 3

//...
var films = ["Le loup de Wall Street", "Vice-Versa", "Babysitting"];
console.log(films[0]); // Affiche "Le loup de Wall Street"
console.log(films[1]); // Affiche "Vice-Versa"
console.log(films[2]); // Affiche "Babysitting"
*/

//____________________
// Parcourir un tableau
// La première consiste à utiliser la boucle for :

/*
var films = ["Le loup de Wall Street", "Vice-Versa", "Babysitting"];

for (var i = 0; i < films.length; i++) {
    console.log(films[i]);
}

// Une autre solution consiste à utiliser la méthode forEach()

var films = ["Le loup de Wall Street", "Vice-Versa", "Babysitting"];
// Push ajoute un element au tableau..
films.push("Les Bronzés");

films.forEach(function (film) {
    console.log(film);
});
*/


//____________________
// Creation d'un tableau d'objet


/*
L'objet Film est le modèle de nos films. 
Sa méthode init() permet de lui donner un titre et une année de sortie, 
et sa méthode decrire() permet de le décrire sous la forme : "titre (année)".
Les objets film1, film2 et film3 sont créés avec Film comme prototype pour bénéficier de ses propriétés.
*/

/*
var Film = {
    // Initialise le film
    init: function (titre, annee) {
        this.titre = titre;
        this.annee = annee;
    },
    // Renvoie la description du film
    decrire: function () {
        var description = this.titre + " (" + this.annee + ")";
        return description;
    }
};

var film1 = Object.create(Film);
film1.init("Le loup de Wall Street", 2013);

var film2 = Object.create(Film);
film2.init("Vice-Versa", 2015);

var film3 = Object.create(Film);
film3.init("Babysitting", 2013);

// Creation du tableau ...
var films = [];
films.push(film1);
films.push(film2);
films.push(film3);

films.forEach(function (film) {
    console.log(film.decrire());
});
*/


//____________________
// Mousquetaire

/*
Ecrivez un programmemousquetaires.js qui :
crée un tableau contenant les noms des trois mousquetaires, Athos, Porthos et Aramis ;
affiche le nom de chaque mousquetaire à l'aide d'une bouclefor ;
ajoute au tableau le mousquetaire d'Artagnan ;
affiche de nouveau le nom de chaque mousquetaire, cette fois à l'aide de la méthodeforEach().
*/

var Mousquetaire = {
	init: function (nom) {
		this.nom = nom;
	},

	decrire: function () {
		var description = this.nom + ".";
		return description;
	}
};

var mousquetaire1 = Object.create(Mousquetaire);
mousquetaire1.init("Athos");
var mousquetaire2 = Object.create(Mousquetaire);
mousquetaire2.init("Portos");
var mousquetaire3 = Object.create(Mousquetaire);
mousquetaire3.init("Aramis");

var mousquetaires = [];
mousquetaires.push(mousquetaire1);
mousquetaires.push(mousquetaire2);
mousquetaires.push(mousquetaire3);

console.log("Voici les 3 mousquetaires !");

mousquetaires.forEach(function (mousquetaire) {
	console.log(mousquetaire.decrire());
});

var mousquetaire4 = Object.create(Mousquetaire);
mousquetaire4.init("D'artagnan");

mousquetaires.push(mousquetaire4);

console.log("Maintenant ils sont quatres !");

mousquetaires.forEach(function (mousquetaire) {
	console.log(mousquetaire.decrire());
});



//____________________
/*
Exercice : somme des valeurs d'un valeursleau
*/

var valeurs = [11, 3, 7, 2, 9, 10];

var somme = 0;
for (var i = 0; i < valeurs.length; i++) {
    somme += valeurs[i];
}
console.log("La somme des éléments vaut " + somme);


//____________________
/*
Exercice : maximum d'un tableau
*/

var valeurs = [11, 3, 7, 2, 9, 10];

var max = valeurs[0];
// L'indice commence à 1 puisque le maximum est initialisé avec la 1ère valeur du tableau
for (var i = 1; i < valeurs.length; i++) {
    if (valeurs[i] > max) {
        max = valeurs[i];
    }
}
console.log("Le maximum des éléments vaut " + max);


//____________________
/*
Exercice : saisie d'une liste de mots
*/

var mots = [];

var mot = "";
while (mot !== "stop") {
    mot = prompt("Entrez un mot ou tapez stop pour arrêter :");
    if (mot !== "stop") {
        mots.push(mot);
    }
}

mots.forEach(function (mot) {
    console.log(mot);
});



//____________________
/*
Exercice : liste de films
*/

var Film = {
    // Initialise le film
    init: function (titre, annee, realisateur) {
        this.titre = titre;
        this.annee = annee;
        this.realisateur = realisateur;
    },
    // Renvoie la description du film
    decrire: function () {
        var description = this.titre + " (" + this.annee + ", " + this.realisateur + ")";
        return description;
    }
};

var film1 = Object.create(Film);
film1.init("Le loup de Wall Street", 2013, "Martin Scorsese");
var film2 = Object.create(Film);
film2.init("Vice-Versa", 2015, "Pete Docter");
var film3 = Object.create(Film);
film3.init("Babysitting", 2013, "Philippe Lacheau et Nicolas Benamou");

var films = [film1, film2, film3];

films.forEach(function (film) {
    console.log(film.decrire());
});



//____________________
/*
Exercice : gestion d'un chenil
*/

var Chien = {
    // initialise le chien
    init: function (nom, race, taille) {
        this.nom = nom;
        this.race = race;
        this.taille = taille;
    },
    // Renvoie l'aboiement du chien
    aboyer: function () {
        var aboiement = "Whoua ! Whoua !";
        if (this.taille < 25) {
            aboiement = "Kaii ! Kaii !";
        } else if (this.taille > 60) {
            aboiement = "Grrr ! Grrr !";
        }
        return aboiement;
    }
};

var crokdur = Object.create(Chien);
crokdur.init("Crokdur", "mâtin de Naples", 75);
var pupuce = Object.create(Chien);
pupuce.init("Pupuce", "bichon", 22);
var medor = Object.create(Chien);
medor.init("Médor", "labrador", 58);

var chenil = [];
chenil.push(crokdur);
chenil.push(pupuce);
chenil.push(medor);

console.log("Le chenil héberge " + chenil.length + " chien(s) :");
chenil.forEach(function (chien) {
    console.log(chien.nom + " est un " + chien.race + " mesurant " + chien.taille + " cm. " +
        "Il aboie : " + chien.aboyer());
});