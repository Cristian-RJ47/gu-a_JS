alert("Ejercicio Diez");

function ingresarDatos(cantidad, turno){
    let edades = [];
    for (let i = 0; i < cantidad; i++) {
        
        let edad = parseInt(prompt(`Ingrese la edad del alumno ${i+1} del turno de la ${turno}`));

        while (Number.isNaN(edad) || edad < 4 || edad > 100) {

            edad = parseInt(prompt(`Error, vuelva a ingresar la edad del alumno ${i+1} del turno de la ${turno}`));
    
        }
        edades.push(edad);
    }
    return edades;
}

function promedios(edades) {
    let suma = edades.reduce((total, edad) => total + edad , 0);
    return suma / edades.length;
}

let turnoMatutino = ingresarDatos(5, "Mañana");
let turnoVespertino = ingresarDatos(6, "Tarde");
let turnoNocturno = ingresarDatos(11, "Noche");

let promedioMatutino = promedios(turnoMatutino);
let promedioVespertino = promedios(turnoVespertino);
let promedioNocturno = promedios(turnoNocturno);

alert(`Promedio del turno de la mañana: ${promedioMatutino.toFixed(2)} \nPromedio del turno de la tarde: ${promedioVespertino.toFixed(2)} \nPromedio del turno de la noche: ${promedioNocturno.toFixed(2)}`);

let promedioMayor = Math.max(promedioMatutino, promedioVespertino, promedioNocturno);

if (promedioMayor === promedioMatutino) {
    alert("El turno con mayor promedio es el turno mañana");
} else if (promedioMayor === promedioVespertino) {
    alert("El turno con mayor promedio es el turno tarde");
} else {
    alert("El turno con mayor promedio es el turno noche");
}