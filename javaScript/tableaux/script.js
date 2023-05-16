//je demande àl'utilisateur d'indiquer un nombre pour la taille du tableau
//j'incrémente dans une boucle pour que l'U. puisse entrer ensuite un nombre indéfifie
//de valeurs

let tableau = parseInt(taille = prompt("Entrer le nombres de lignes"),elements = '');
// console.log(tableau);

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