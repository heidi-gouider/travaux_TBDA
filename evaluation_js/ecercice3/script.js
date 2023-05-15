let prenom = prompt("Saisissez un prénom :");
let tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];

// pour parcourie le tableau j'utilise la boucle for et la fonction length()
// la première question que je me pose est quelle méthode utiliser?
//1/ pour trouver un element du tableau par sa valeur
//2/ pour supprimer un element du tableau
//3/ pour décaler les cases suivantes de cet element
//4/ pour que la longueur du tableau rest la même et donc avoir une case vide

//1/Pour chercher le prénom saisie par l'utilisateur dans mon tableau : la methode indexOf(indice) ou find(valeur)?
let ok = tab.find(element => element == prenom);
//2/ j'utilise la méthode splice pour modifier un element choisi
// if (ok == true){
//     ind = tab.indexOf(prenom);
//     supr = tab.spicle(0, 1);

// }
// else {
//     console.log("erreur");
// }


// supr = tab.splice(prenom)