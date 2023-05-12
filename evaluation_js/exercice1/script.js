//  je crée une boite de dialogue qui de mande à l'utilisateur
// différents âges. Pour ça je crée un element = la balise input
// avec l'attribut id

// let age = document.getElementById("age");
// addEventListener()
// for(i=0, i<=age, i++){

// }

let ages = "age";
i = 0;

while (ages !== "") {
    ages = prompt("Saisissez l'age N°" + (i + 1) + "\n ou Clic sur Annuler pour arrêter la saisie.") * 1;
    i++;

    console.log(ages + i - 1);
}




// lorsque l'utilisateur valide un champ vide je lui indique le nombre
// total de chaque catégorie entrée
// let ages = jeune, moyen, vieux;

// function totalCat(nbJeune, nbMoyen, nbVieux) {
//     // let ages = jeune, moyen, vieux;

//     if (ages > 40) {
//         nbVieux = N *;
//     }
//     else if (ages <= 40 && ages >= 20) {
//         ages = moyen;
//     }
//     else {
//         ages = jeune;
//     }
//     console.log("il y a " + jeune + "jeune" + "\n" + "il y a " + moyen + "moyen" + "\n" + "il y a " + vieux + "vieux");
// }

// totalCat(ages);
// console.log(ages + i - 1);

// const input = document.querySelector('input');

// input.onclick = function() {
//   let name = prompt('Quel est votre nom&nbsp;?');
//   alert('Salut ' + name + ', sympa de vous voir&nbsp;!');
// }



