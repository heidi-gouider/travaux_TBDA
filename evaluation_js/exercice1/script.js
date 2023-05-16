let jeune = 0;
let moyen = 0;
let vieux = 0;

// lorsque l'utilisateur entre un age supérieur à 100 la saisie s'arrete

    for (let age = 0; age < 100; age++) {
        age = parseInt(prompt("Saisissez l'age :"));
            console.log(age);
        if (age > 40) {
            vieux++;
        }
        else if (age <= 40 && age >= 20) {
            moyen++;
        }
        else if (age < 20) {
            jeune++;
        }
    }
    
// total de chaque catégorie entrée
alert("Total jeune :" + jeune  + "\n" + "Total moyen :" + moyen + "\n" + "Total vieux :" + vieux);
       





