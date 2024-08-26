alert("Ejercicio 6");

function validarPrecio(dato){
    let comprobar = (!Number.isNaN(dato) && dato>0);
    return comprobar;
}
function convertirTexto(texto){
    return texto = texto.toLowerCase();
}
function validarTexto(dato){
    return comprobar = (dato.trim() !== "" && /^[a-z\s]+$/.test(dato));
}

function descuento(datOrigen, datoDestino, datoPrecio){
    let descuentoFinal = 0;
    let msj = `Ciudad de origen: ${datOrigen}\nCiudad de destino: ${datoDestino}\nPrecio del viaje: $${datoPrecio.toFixed(2)} \n`;
    
    if (datOrigen == "la palma" && datoDestino == "la costa del sol") {
        descuentoFinal = (datoPrecio*5)/100;
        alert(`${msj}Descuento del viaje: $${descuentoFinal.toFixed(2)}`)
    } else if (datoDestino == "panchimalco") {
        descuentoFinal = (datoPrecio*10)/100;
        alert(`${msj}Descuento del viaje: $${descuentoFinal.toFixed(2)}`)
    } else if (datoDestino == "puerto el triunfo") {
        descuentoFinal = (datoPrecio*15)/100;
        alert(`${msj}Descuento del viaje: $${descuentoFinal.toFixed(2)}`)
    }else{
        alert(`${msj}Descuento del viaje: $${descuentoFinal.toFixed(2)}`)
    }
} 

let origen = convertirTexto(prompt("Ingrese la ciudad de origen: "));
let destino = convertirTexto(prompt("Ingrese la ciudad de destino: "));
let precio = parseFloat(prompt("Ingrese el precio del viaje turistico: "));

if(validarPrecio(precio) == true && validarTexto(origen) == true && validarTexto(destino) == true){
    descuento(origen,destino,precio);
}else{
    alert("Error, no ingresó un texto válido o un precio válido");
}