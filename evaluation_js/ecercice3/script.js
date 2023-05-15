let prenom = prompt("Saisissez un prénom :");
let tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];

//Après avoir déclaré les variables dont le programme aura besoin, 
//la première question que je me pose est quelle méthode utiliser ;)?

//1- pour trouver un element du tableau par sa valeur
//2- pour supprimer un element du tableau
//3- pour décaler les cases suivantes de cet element
//4- pour que la longueur du tableau rest la même et donc avoir une case vide

//1.Pour chercher le prénom saisie par l'utilisateur dans mon tableau : 
//=> la methode indexOf(indice) pour rechercher l'indice ou find pour trouver la valeur)?

let ok = tab.find(element => element == prenom);
//2. pour supprimer l'element donné par sa valeur j'utilise la methode indexOf()pour trouver son indice
// puis la methode splice() pour supprimer sa valeur en utilisant son indice
let indice = tab.indexOf(ok);
    if (indice !== -1){
        tab.splice(indice, 1);
        tab.push("");
    }
    else if (indice === -1) {
            console.log("erreur")
    }
console.log(tab);
console.log(tab.length);

//3. pour déplacer les cases du tableau, je vais créer une fonction

// tab.filter(tab => )

// function nouveauTableau(tab, prenom){
