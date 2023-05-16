// j'accède au bouton de validation du formulaire en le récupérant par son id
// let validation = document.getElementsByName("valider");
// je créer un évennement de type click
// validation.addEventListener("click", valid);

//     function valid() {

//     };


let validation = document.getElementById("soumettre");
let prenom = document.getElementById("prenom");
let prenomMiss = document.getElementById("prenomMiss");
let nom = document.getElementById("nom");
let nomMiss = document.getElementById("nomMiss");
// let saisie = document.getElementsByClassName("saisie");
// je voudrais trouver une methode qui me permette de réunir tous les champs de saisie
//pour renvoyer une erreur et indiquer quel champ est manquant...
//je n'ai pas encore trouvé la solution
//je vais donc utiliser un switche pour tout les cas de saisie

//je vais utiliser la propriété validity.valueMissing
//pour vérifier si les champ de saisie ne sont pas vide et renvoyer un message si c'est le cas.
//le formulaire ne sera pas soumit tant que les champs obligatoire seront vides
validation.addEventListener("click", function (e){
    if(prenom.validity.valueMissing){
        e.preventDefault();
        prenomMiss.textContent = "Vous devez remplir ce champ";
    }
    else if(nom.validity.valueMissing ){
        e.preventDefault();
        nomMiss.textContent = "Vous devez remplir ce champ";
    }
    // else {
    //     validation.setCustomValidity("");
    // }
});



