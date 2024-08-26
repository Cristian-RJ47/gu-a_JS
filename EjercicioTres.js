alert("EJERCICIO 3");
/*declaramos la funcion para calcular el aumento */
function calcAumento(sueldo, escala) {
    let aumento = 0;
    escala = escala.toUpperCase();
    
    switch (escala) {
        case "A":
            aumento = (sueldo * 15) / 100;
            break;
        case "B":
            aumento = (sueldo * 30) / 100;
            break;
        case "C":
            aumento = (sueldo * 10) / 100;
            break;
        case "D":
            aumento = (sueldo * 20) / 100;
            break;
        default: 
            alert("Categoría no válida. Debe ser A, B, C o D.");
            return NaN;
    }
    return aumento;
}
/*ingresamos datos */
let nombre = prompt("Ingrese el nombre del trabajador: ");
let salario = parseFloat(prompt("Ingrese el salario:"));
let categoria = prompt("Ingrese la categoría: \n A - B - C - D");

/*calculamos el aumento */
let aumento = calcAumento(salario, categoria);
/*validamos categoria y salario */
if (!Number.isNaN(salario) && salario > 0 && !Number.isNaN(aumento)) {
    let nuevoSalario = salario + aumento;
    alert(
        "Empleado: " + nombre + "\n Categoría: " + categoria + "\n Salario: $" + salario.toFixed(2) + "\n Aumento salarial: $" + aumento.toFixed(2) + "\n Nuevo salario: $" + nuevoSalario.toFixed(2)
    );
} else {
    alert("Salario o categoría incorrectos");
}