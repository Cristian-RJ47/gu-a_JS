alert("EJERCICIO 8");

let numero = parseInt(prompt("Ingrese un número del 1 al 10"));
let comprobar = (Number.isNaN(numero));

if (comprobar==false && (numero>0 & numero<=10)){
    let resultado = "LA TABLA DEL " + numero + "\n";
    for (var i = 1; i <=10; i++) {
        resultado += numero + " x " + i + " = " + (numero * i) + "\n";
    }
    alert(resultado);
}else{
    alert("Error. Ingrese un número del 1 al 10");
}