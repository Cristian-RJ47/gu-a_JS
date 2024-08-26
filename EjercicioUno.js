alert("EJERCICIO 1");

function testAge(age){
    let msj = age>=18 ? "Usted es mayor de edad" : "Usted es menor de edad";
    alert(msj);  alert(message);
}
/*Ingresa la edad y la valida */
let edad = parseInt(prompt(`Ingrese su edad`));

    while (Number.isNaN(edad) || edad < 0 || edad > 100) {

        edad = parseInt(prompt(`Error, vuelva a ingresar su edad`));
    
    }
/*muestra el mensaje*/ 
testAge(edad);

/*Puedo programar lo que sea, menos una cita con ella :c  */