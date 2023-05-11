
var N = parseInt (prompt("Entrer un nombre:"));


function tableMultiplication(N) {
    
    for (i=1; i<11; i++) {
        result = N * i;
        // console.log(X + "x" + i + "=" + result);
        document.write(i + "x" + N + "=" + result);
        // console.log(result);

    }
    tableMultiplication (N);
    // console.log(result);


    
}


