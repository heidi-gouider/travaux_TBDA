/* je vais choisir la méthode querySelector pour selectionner le formulaire de contactpar son identifiant ("#")
pour me permettre par la suite d'acceder aux différents éléments grâce à leur name*/
let form = document.querySelector("#contactForm");

// je vais écouter la modification des champs obligatoires saisi par l'utilisateur
let validation = document.getElementById("soumettre");
validation.addEventListener("click", function (e) {
        if (form.prenom.validity.valueMissing) {
            e.preventDefault();
            prenomMiss.textContent = "Vous devez remplir ce champ";
        }
        else if (form.nom.validity.valueMissing) {
            e.preventDefault();
            nomMiss.textContent = "Vous devez remplir ce champ";
        }
        else if (form.feminin.validity.valueMissing || form.masculin.validity.valueMissing) {
            e.preventDefault();
            sexeMiss.textContent = "Vous devez remplir ce champ";
        }
        else {
            validation.setCustomValidity("");
        }
    });
/* je vais également m'assurer que la saisie de l'utilisateur soit correct
c'est à dire accepter que le nom soit tout en minuscule
Pour ça je vais utiliser une expression régulière(regex)*/
// let verif = new RegExp("");

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



