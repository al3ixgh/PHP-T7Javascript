var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
console.log(letras.length);
function miFunc() {
    //guarda los valores introducidos en variables
    var number = document.getElementById("numero").value
    var letra = document.getElementById("letra").value
    //comprueba que el numero introducido es valido
    if ((number < 0) || (number > 99999999)) {
        alert("Numero no valido");
    }
    //calcula el resto de dividir el numero entre 23
    var res = number % 23;
    //comprueba que la letra corresponde al numero y lanza una alerta informando
    if (letra != letras[res]) {
        alert("La letra introducida no es correcta")
    } else {
        alert("El numero y la letra del DNI son correctos");
    }
}

