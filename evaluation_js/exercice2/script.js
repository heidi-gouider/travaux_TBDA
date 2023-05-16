/*Je déclare une variable, j'ouvre une boîte de dialogue.
 la valeur attribuée à la variable correspondra au chiffre saisie par l'U.
 Comme la valeur attribuée est un string, j'utilise la méthode parseInt
 pour la convertir en int*/
let N = parseInt (prompt("Entrer un nombre:"));
/*ensuite je vais créer une fonction qui aura pour paramètre ma variable
 l'instruction sera une boucle qui incrémentera le multiplicateur à partir de 1 jusqu'a 10*/
function tableMultiplication(N) {
    
    for (i=1; i<11; i++) {
        result = N * i;
        console.log (N + "x" + i + "=" + result);
        // document.write (N + "x" + i + "=" + result);
    }    
}
//j'appelle ma fonction et hop :)
tableMultiplication (N);


