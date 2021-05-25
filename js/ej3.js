//ejercicio 3
var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

var valores = [true, 5, false, "hola", "adios", 2]

document.write(meses);

//ejercicio 4
//apartado 4.1
var res="";

for(i=0;i<valores.length;i++){
    if(typeof(valores[i])==='string'){
        if(valores[i].length>res.length){
            res=valores[i];
        }
    }
}
console.log("La cadena mas larga en el array es: ",res);

//apartado 4.2
//asigno a var1 y var2 los 2 booleanos existentes en la cadena
var var1=-1,var2
 for(i=0;i<valores.length;i++){
     while(var1===-1){
         if(typeof(valores[i])==='boolean'){
             var1=valores[i]
         }
     }
     if(typeof(valores[i])==='boolean'){
         var2=valores[i]
     }
 }
//para un resultado falso utilizo la multiplicacion
console.log("resultado falso: ",var1*var2);
//para un resultado cierto utilizo la suma
console.log("resultado cierto: ",var1+var2);

//apartado 4.3
//asigno a var3 y var4 los 2 numeros existentes en la cadena
 var var3=-1,var4
 console.log("aqui llega");
 console.log("asdasdg");
 for(i=0;i<valores.length;i++){
     while(var3===-1){
         if(typeof(valores[i])==='number'){
             var3=valores[i]
         }
     }
     if(typeof(valores[i])==='number'){
         var4=valores[i]
     }
 }

//  console.log("var3=",var3);
// console.log("var4=",var4);