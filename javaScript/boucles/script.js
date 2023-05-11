// ex.1/////

// var prenom = prompt ("Saisissez le prénom N°1 \n ou Clic sur Annuler pour arrêter la saisie.");
let prenom = "prenom";
i = 0;

while (prenom !== "") {
    prenom = prompt("Saisissez le prénom N°" + (i + 1) + "\n ou Clic sur Annuler pour arrêter la saisie.");
    i++;
    // if (prenom == "") {
        // console.log(prenom + i-1 + "");
    }
        console.log(prenom+ i-1);


// ex.2////////

var N = 8;
for (i=0; i<N; i++) {
    console.log(i);
}

// ex.3/////

// var nombre = prompt("Entrez un nombre entier:");
// for (i=nombre; i;){
//     alert("La somme des")
// }

// let nombre = nombre;
// i=0;
// while (nombre != "") {
//     let nombre = prompt("Entrez des nombre entier:");

//     somme = nombre + i++;
//     console.log (somme);

// }

// ex.4///////

var X = Number (prompt("Entrer le nombre entier à muliplier:"));
var N = Number(prompt("Entrer le nombre de fois à multiplier:"));
for (i=1; i<=N; i++) {
    var result = X * i;
    console.log(X + "x" + i + "=" + result);
}
// ex.5

// var mot = prompt("Entrez un mot:");

// for (i=0; )
