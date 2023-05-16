/* je vais choisir la méthode querySelector pour selectionner le formulaire de contactpar son identifiant ("#")
pour me permettre par la suite d'acceder aux différents éléments grâce à leur name*/
let form = document.querySelector("#contactForm");
// form.prenom;


// let validation = document.getElementById("soumettre");
//validation.addEventListener("click", function (e) {
    //     if (form.prenom.validity.valueMissing) {
    //         e.preventDefault();
    //         prenomMiss.textContent = "Vous devez remplir ce champ";
    //     }
    //     else if (nom.validity.valueMissing) {
    //         e.preventDefault();
    //         nomMiss.textContent = "Vous devez remplir ce champ";
    //     }
        // else {
        //     validation.setCustomValidity("");
        // }
    // });

/*je vais chercher une méthode pour que ma validation comprenne chaque élément de saisie
la question que je me pose est est ce que je peut declarer une variable en tant qu'obet qui
me permettrait de mettre en argument tous les éléments?*/

// let prenom = document.getElementById("prenom");
// let prenomMiss = document.getElementById("prenomMiss");
// let nom = document.getElementById("nom");
// let nomMiss = document.getElementById("nomMiss");
// let saisie = document.getElementsByClassName("saisie");

/* je voudrais trouver une methode qui me permette de réunir tous les champs de saisie
   pour renvoyer une erreur et indiquer quel champ est manquant...
   je n'ai pas encore trouvé la solution
   je vais donc utiliser un switche pour tout les cas de saisie*/

/* je vais utiliser la propriété validity.valueMissing
   pour vérifier si les champ de saisie ne sont pas vide et renvoyer un message si c'est le cas.
   le formulaire ne sera pas soumit tant que les champs obligatoire seront vides*/
   
// validation.addEventListener("click", function (e) {
//     if (prenom.validity.valueMissing) {
//         e.preventDefault();
//         prenomMiss.textContent = "Vous devez remplir ce champ";
//     }
//     else if (nom.validity.valueMissing) {
//         e.preventDefault();
//         nomMiss.textContent = "Vous devez remplir ce champ";
//     }
    // else {
    //     validation.setCustomValidity("");
    // }
// });



