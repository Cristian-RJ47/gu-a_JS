alert("EJERCICIO 4");

function number(){
    let numOne = parseInt(prompt("Ingresa un número"));
    let numTwo = parseInt(prompt("Ingresa otro número"));

    let comprobar = (Number.isNaN(numOne) || Number.isNaN(numTwo));

    if(comprobar == false){
        
        if(numOne===numTwo){

            alert("Sus números son iguales");

        }else{

            let message = numOne>numTwo ? "El primer número: " + numOne + " es mayor que el segundo número: " + numTwo : "El segundo número: " + numTwo + " es mayor que el primer número: " + numOne;
            alert(message);

        }
    }else{

        alert("Error. No Ingresó números Válidos");

    }
}

number();

/*Quisiera declararle mi amor a ella, pero solo sé declarar variables :c  */