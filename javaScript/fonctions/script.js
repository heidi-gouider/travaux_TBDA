// ex.1/////

//je vais créer une fonction qui aura pour paramètre deux variables
function produit(x, y) {
    resultat = x * y;
    //j'utilise l'instruction return pour pouvoir stocker par la suite mes différents résultats
    // en fonction des valeurs qui seront données aux variables
    // resultat(x * y);
    // return x * y;
}

//je crée une variable pour stcker des valeurs 
// var result = produit(2, 4);
// console.log(result);
// lorsque j'appelle la fonction je vais lui passer des arguments.
// ceux -ci corrrespondent aux valeurs des paramètres que j'ai déclaré
produit(2, 4);
console.log(resultat);

// document.body.onload = afficheImage;

function afficheImage(image) {
    var image = document.createElement("img");
    image.src = "assets/papillon.jpg";
    document.body.appendChild(image);
}
afficheImage("assets/papillon.jpg");


// ex.2//////////

