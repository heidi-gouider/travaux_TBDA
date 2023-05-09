// ex.1

// var prenom = prompt ("Saisissez le prénom N°1 \n ou Clic sur Annuler pour arrêter la saisie.");
var prenom = "prenom";
i = 0;


while (prenom!= ""){
    prenom = prompt("Saisissez le prénom N°" + i + "\ ou Clic sur Annuler pour arrêter la saisie.");
    i ++;
    if (prenom == ""){
        open("");
    }
}
// confirm (null);
console.log(prenom + i);




// ex.5

var mot = prompt("Entrez un mot:");
