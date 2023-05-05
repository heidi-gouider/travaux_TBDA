var nb = Number (prompt("Entrez un nombe"));

if (nb %= 2 == 0) {
    alert("nombre pair");
}
else {
    alert("nombre impair");
}

var birth = Number (prompt("Entrez votre année de niassance:"));
var date = 2023;

if (date - birth >= 18) {
    alert("Vous êtes majeur");
}
else {
    alert("Vous êtes mineur");
}

//ici je vais utiliser deux méthodes différentes(pour m'amuser;)
//la première avec l'instruction switch
//la deuxième avec soit une condition multiple soit une condition simple
var nb1 = prompt("Entrez un premier nombre");
var nb2 = prompt("Entrez un deuxième nombre");
var operateur = prompt("Entrez un opérateur");

switch (operateur){
    case "+":
        alert(nb1 + nb2);
        break;
}


