function miFunc() {
    var cadena = document.getElementById("cadena").value
    //M contiene el numero de letras mayusculas
    //m contiene el numero de letras minusculas
    var M=0, m=0;
    //recorre la cadena y compara cada caracter con el codigo ascii
    for(i=0;i<cadena.length;i++){
        if((cadena.charCodeAt(i)>64)&&(cadena.charCodeAt(i)<91)){
            M++;
        }
        else if((cadena.charCodeAt(i)>96)&&(cadena.charCodeAt(i)<123)){
            m++;
        }
    }
    //segun el valor de m y M comprobar si la cadena contiene mayusculas y minusculas 
    //imprimir resultado por consola
    if((m>0)&&(M>0)){
        console.log("la cadena contiene mayusculas y minusculas");
    }
    else if((m>0)&&(M<1)){
        console.log("la cadena solo contiene minusculas");
    }
    else{
        console.log("la cadena solo contiene mayusculas");
    }
}
