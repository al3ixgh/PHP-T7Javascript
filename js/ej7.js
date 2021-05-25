
function miFunc() {
    var number = document.getElementById("numero").value
    console.log("el numero inicial es: ", number);
    var resultado = number;
    for (i = number - 1; i > 0; i--) {
        resultado = resultado * i;
    }
    console.log("el resultado es: ", resultado);
}