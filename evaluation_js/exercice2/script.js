
var N = parseInt (prompt("Entrer un nombre:"));


function tableMultiplication(N) {
    
    for (i=1; i<11; i++) {
        result = N * i;
        console.log(N + "x" + i + "=" + result);
        // document.write (N + "x" + i + "=" + result);
        // rien ne s'affiche à l'écran...
    }    
}
tableMultiplication (N);


