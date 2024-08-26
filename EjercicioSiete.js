alert("Ejercicio 7");

let numbers = [];
for (let i = 0; i < 10; i++) {

    let numero = parseInt(prompt(`Ingresa un número ${i + 1}`));

    while (Number.isNaN(numero)) {

        numero = parseInt(prompt(`Error. Ingresa un número ${i + 1}`));

    }

    numbers.push(numero);

}

let positivos = numbers.filter(numero => numero >= 0).length;
let negativos = numbers.filter(numero => numero < 0).length;
let multiplos15 = numbers.filter(numero => numero % 15 === 0).length;

let sumarPares = numbers.reduce((acumulador, numero) => {
    if (numero % 2 === 0) {
        acumulador += numero;
    }
    return acumulador;
}, 0);
alert(numbers);
alert(`Cantidad de números positivos: ${positivos}\nCantidad de números negativos: ${negativos}\nCantidad de múltiplos de 15: ${multiplos15}\nSuma de los números pares: ${sumarPares}`);