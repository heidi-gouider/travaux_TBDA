// ex.1//////

var nb = Number (prompt("Entrez un nombe"));

if (nb %= 2 == 0) {
    alert("nombre pair");
}
else {
    alert("nombre impair");
}

// ex.2///////////

var birth = Number (prompt("Entrez votre année de niassance:"));
var date = 2023;

if (date - birth >= 18) {
    alert("Vous êtes majeur");
}
else {
    alert("Vous êtes mineur");
}

// ex.3//////////

var nb1 = Number (prompt("Entrez un premier nombre"));
var nb2 = prompt("Entrez un deuxième nombre") *1;
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
        if(nb1==0 || nb2 == 0){
            alert("erreur");
        } else{
            alert(nb1 / nb2);
        }
        break;
    default :
        alert("erreur");        
}


