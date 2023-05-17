let prenom = prompt("Saisissez un prénom :");
let tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];

/*Après avoir déclaré les variables dont le programme aura besoin, 
la première question que je me pose est quelle méthode utiliser 
pour chaque fonctionnalité demandée ;)?*/

    
/*1.Pour chercher le prénom saisie par l'utilisateur dans mon tableau : 
=> la methode indexOf(indice) pour rechercher l'élément par son index(sa position)
=> la méthode find pour chercher l'élément par sa valeur */

let ok = tab.find(element => element == prenom);

//2. pour supprimer l'element donné par sa valeur j'utilise la methode indexOf()pour trouver son indice
// puis la methode splice() pour supprimer sa valeur en utilisant son indice
let indice = tab.indexOf(ok);
    if (indice !== -1){
        tab.splice(indice, 1);
        tab.push("");
//3.pour conserver la taille initial du tableau  je rajoute une case vide avec la methode push*/
    }
    else if (indice === -1) {
            console.log("erreur")
    }
console.log(tab);
console.log(tab.length);

