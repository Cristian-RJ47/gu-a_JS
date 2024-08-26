alert("EJERCICIO 2");
/*se puede hacer sin meter todo en una funcion pero ya funciona. esta nota la hice despues de terminar la guia xdxd */
function calcularNotaFinal (notaExamen,notaTareas,notaAsistecia,notaInvestigacion){
    notaExamen= (notaExamen*20)/100;
    notaTareas= (notaTareas*40)/100;
    notaAsistecia= (notaAsistecia*10)/100;
    notaInvestigacion= (notaInvestigacion*30)/100;
    notaF=notaExamen+notaTareas+notaAsistecia+notaInvestigacion;
    return notaF.toFixed(2);
}
/*funcion para validar cualquier nota */
function validarNumero(dato){

    while (Number.isNaN(dato) || dato<0 || dato>10.0) {

        dato = parseFloat(prompt(`Error, ingrese una nota válida`));
    
    }
    return dato;
}
/*Ingresa datos. sí, se pueden validar pero ya me retrasé mucho tiempo y quiero entregarla */
let student= prompt("Ingrese el nombre del Alumno: ");
let carnet= prompt("Ingrese el carnet: ");
/*Ingresa notas y las valida */
let examen=parseFloat(prompt("Nota de Examen"));
examen = validarNumero(examen);
let tareas=parseFloat(prompt("Nota de Tareas"));
tareas = validarNumero(tareas);
let asistecia=parseFloat(prompt("Nota de Asistencia"));
asistecia = validarNumero(asistecia);
let investigacion=parseFloat(prompt("Nota de Investigación"));
investigacion = validarNumero(investigacion);

/*devuelve los datos ordendos al cliente */
alert("Nombre: "+student+"\n Carnet: "+carnet+"\n Nota Final: "+calcularNotaFinal(examen,tareas,asistecia,investigacion));
