
/********contrôle envoie des données saisies ***********/

/* je vais choisir la méthode querySelector pour selectionner le formulaire de contact par son identifiant ("#")
pour me permettre par la suite d'acceder aux différents éléments grâce à leur name*/
let form = document.querySelector("#contactForm");

/* je vais créer une écoute 
lorsque le bouton de validation est clické pour permettre
ou non l'envoie des données saisies dans le formulaire.
Si les valeurs entrées ne sont pas
valides, alors le formulare ne sera pas envoyé et un message sera transmis à l'utilisateur
sinon le formulaire sera envoyé*/

form.valider.addEventListener("click", function (e) {
        if (form.prenom.validity.valueMissing) {
            e.preventDefault();
            form.prenom.style.border = " 1px solid red";
            prenomMiss.textContent = "Ce champ est obligatoire";
        
        }
        else if (form.nom.validity.valueMissing) {
            e.preventDefault();
            nomMiss.textContent = "Ce champ est obligatoire";

        }
        else if (form.feminin.validity.valueMissing || form.masculin.validity.valueMissing) {
            e.preventDefault();
            sexeMiss.textContent = "Ce champ est obligatoire";
        }
        else {
            form.valider.setCustomValidity("");
        }
    });

    // form.valider.addEventListener("click", function (e) {
    //     let formInput = document.getElementsByClassName('champ') [1];
    //     let small = formInput.nextElementSibling;

    //     if (form.prenom.validity.valueMissing || form.nom.validity.valueMissing ||form.feminin.validity.valueMissing || form.masculin.validity.valueMissing ) {
    //         e.preventDefault();
    //         // formInput.style.border = " 1px solid red";
    //         small.innertHtml = "champ obligatoire";
    //         small.classList.add = "text-danger";
        
    //     }
    //     else {
    //         form.valider.setCustomValidity("");
    //     }
    // });


// form.annuler.addEventListener("click", function(event) {
//     form.annuler.setCustomValidity("");
// });

/* je vais également m'assurer que la saisie de l'utilisateur soit correct
Pour ça je vais utiliser une expression régulière(regex)*/
// let verif = new RegExp("");

form.email.addEventListener("change", function() {
    validEmail(this);
});

let validEmail = function (inputEmail) {
    let emailRegExp = new RegExp(
    "^[a-zA-Z0-9;-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$", "g"
    );

//je vérifie si la valeur saisi par l'utilisateur est vrai ou fausse
//si l'email est valide les bordures de l'input seront vertes
//sinon, un message apparaitra en rouge
let testEmail = emailRegExp.test (inputEmail.value);
let small = inputEmail.nextElementSibling;
let borderInput = inputEmail.styleBackgroundColor;

 if(testEmail) {
    borderInput = "red";
 }
};
//ensuite je fais en sorte que si la saisi est correct elle puisse égale est envoyé



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



