
/******** VALIDATION ENVOIE FORMULAIRE DE CONTACT ***********/
                /************************/

/* je choisi la méthode querySelector et selectionne le formulaire de contact par son identifiant ("#")
pour me permettre par la suite d'acceder aux différents éléments grâce à leur nom*/

let form = document.querySelector("#contact");
// document.forms ("contact");

/* je vais créer un évennement d'écoute lorsque le bouton de validation est clické pour indiquer à l'utilisateur
si un ou pls champs obligatoires n'est pas complété. 
S'il manque une ou pls valeurs un message s'affichera.
*/
/************** TEST POUR LES PREMIERS CHAMPS OBLIGATOIRES AVEC UN CLICK SUR LE BOUTON VALIDER ******************** */

    // form.addEventListener("submit", function (event) {
    form.valider.addEventListener("click", function (event) {
// document.forms["contact"].addEventListener("submit", function (event) {
    event.preventDefault();


/*ici j'aimerais me servir d'une boucle (pour éviter les longueurs :) !) et vérifier les valeurs manquantes de chaque champs 
obligatoires. Je n'ai pas encore trouvé la solution .... research going on ;)*/

//     let inputs = document.getElementsByClassName("champ_obligatoire").getElementsByTagName("input");
//     let inputs = this;

//     for (let i = 0; i < inputs.length; i++) {

//         if (inputs[i].valueMissing)
//         // (inputs[i].validity.valueMissing) 
//         {
//             // inputs.style.border = " 1px solid red";
//      console.log ("erreur");
//         }
        
//     };
// });
  
/* je vais utiliser la propriété validity.valueMissing
   pour vérifier si les champ de saisie ne sont pas vide et renvoyer un message si c'est le cas.*/


        if (form.prenom.validity.valueMissing) {
            // e.preventDefault();
            form.prenom.style.border = " 1px solid red";
            prenomMiss.textContent = "Ce champ est obligatoire";
        };
        
        if (form.nom.validity.valueMissing) {
            // e.preventDefault();
            form.nom.style.border = " 1px solid red";
            nomMiss.textContent = "Ce champ est obligatoire";
        };

        // erreur de script pour cette condition !!!!! A corriger /nb.voir le propriété checked(balise html)
        //  ici je laisse le commentaire car j'ai enfin trouvé la solution !! 
        //  en plus de l'erreur d'oublie du checked, ma condition était : si ou ...  Bam trouvé!
        if ((!form.feminin.checked ) && (!form.masculin.checked )) {
            // e.preventDefault();
            // form.feminin.style.border, form.masculin.style.border = " 1px solid red";
            sexeMiss.textContent = "Ce champ est obligatoire";
        };

        // if (form.sujet) pour la liste déroulante, il faut s'assurer que l'U selectionne(click?) un de [2 à 5] de la liste

//je vérifie si la valeur saisi par l'utilisateur respecte l'expression régulière suivante

        // let validEmail = function (email) {
            let emailRegExp = new RegExp(
            "^[a-zA-Z0-9;-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$", "g"
            );

        if(form.email != emailRegExp) {
            form.email.style.border = "1px solid red";
            validEmail.textContent = "email non valide";
            // small.classList.add = "text-danger";
            // return fasle;
        } 
        // };

            
        else {
            form.valider.setCustomValidity("");
        }
    });
// });

    // form.valider.addEventListener("click", function (e) {
    //     // let formInput = document.getElementsByClassName('champ') [1];
    //     // let small = formInput.nextElementSibling;
    //     let inputs = document.getElementById("champs-obligatoires").getElementsByTagName("input");
    //     if (form.prenom.validity.valueMissing || form.nom.validity.valueMissing ||form.feminin.validity.valueMissing || form.masculin.validity.valueMissing ) {
    //         e.preventDefault();
    //         form.style.border = " 1px solid red";
    //         small.innertHtml = "champ obligatoire";
    //         small.classList.add = "text-danger";
        
    //     }
    //     else {
    //         form.valider.setCustomValidity("");
    //     }
    // });


/* je vais m'assurer que la saisie de l'utilisateur soit correct
Pour ça je vais utiliser une expression régulière(regexp)*/
// let verif = new RegExp("");

    /* *********** TEST VALIDITE EMAIL *************/

// form.email.addEventListener("change", function() {
//     validEmail(this);
// });

// let validEmail = function (email) {
//     let emailRegExp = new RegExp(
//     "^[a-zA-Z0-9;-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$", "g"
//     );

//je vérifie si la valeur saisi par l'utilisateur respecte l'expression régulière(vrai ou fausse)
//si l'email est valide les bordures de l'input seront vertes
//sinon, un message apparaitra en rouge
//je demande ensuite à la fonction de renvoyer l'information si vrai ou faux

// let testEmail = emailRegExp.test (email.value);
// let small = inputEmail.nextElementSibling;
// let borderInput = document.getElementsByClassName("champ")[1].style.border;

// if(testEmail != validEmail) {
//     form.validEmail.style.border = "1px solid red";
//     form.validEmail.innertHtml = "email non valide";
    // small.classList.add = "text-danger";
    // return fasle;
// }
// else {
//     return true;
// }
// };
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



