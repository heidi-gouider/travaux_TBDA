// var nb = Number (prompt("Entrez un nombe"));

// if (nb %= 2 == 0) {
//     alert("nombre pair");
// }
// else {
//     alert("nombre impair");
// }

// var birth = Number (prompt("Entrez votre année de niassance:"));
// var date = 2023;

// if (date - birth >= 18) {
//     alert("Vous êtes majeur");
// }
// else {
//     alert("Vous êtes mineur");
// }

var nb1 = Number (prompt("Entrez un premier nombre"));
var nb2 = Number (prompt("Entrez un deuxième nombre"));
//Pour les valeurs des deux variables précédentes, j'ai utilisé le constructeur Number
//pour éviter que la réponse soit une chaine de caractère. Ce constructeur permet de la convertir en nombe
var operateur = prompt("Entrez un opérateur");

switch (operateur){
    case "+":
        alert(nb1 + nb2);
        break;
    case "-":
        alert(nb1 - nb2);
        break;
    case "*":
        alert(nb1 * nb2);
        break;
    case "/":
        alert(nb1 / nb2);
        break;
    default :
        alert("erreur");        
}


