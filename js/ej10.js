//saber si la cadena es un palindromo
function miFunc() {
    var cadena = document.getElementById("cadena").value
    //quitar los espacios en blanco dentro de cadena
    cadena=cadena.replace(/ /g,"");
    var tamaño_Cadena=cadena.length;
    var palindromo=true
    /*recorre la mitad de posiciones de la cadena y compara cada valor con
    su simetrico, cuando estos no coinciden palindromo pasa a ser falso*/
    for(i=0;i<parseInt(tamaño_Cadena/2);i++){
        if(cadena[i]!=cadena[cadena.length-1-i]){
            palindromo=false
        }
    }
    if(palindromo==true){
        console.log("la cadena es un palindromo");
    }
    else{
        console.log("la cadena no es un palindromo");
    }
}