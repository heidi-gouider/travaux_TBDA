// je demande à l'utilisateur d'indi
// var saisie = prompt("Entrer le nombres d'elements");
// var tableau = new Array(saisie, elements ='');


let tableau = new Array (taille = prompt("Entrer le nombres de lignes")*1, elements = '');
console.log(tableau);

for(i=0; i<=taille; i++){
    let valeurElement = prompt("entrer l'element n°" + (i+1));
    elements+= valeurElement + taille [i]; //"\n";
    // elements+= valeurElement [i]; //"\n";

    
    // console.log(elements);
}
// alert( elements);
console.table([elements]);

// function afficheTableau(tab) {
//     var tab = document.createElement("board");
//     var newContent = document.create
//     document.body.appendChild(image);
// }
// afficheTableau("tab");