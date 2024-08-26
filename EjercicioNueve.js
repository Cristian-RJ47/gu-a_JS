alert("EJERCICIO 9");

function covertirTemperatura(datoC){
    let temperatura = ( datoC * 9/5) + 32;
    return temperatura;
}
function temperatura(datoF){
    if (datoF >= 14 && datoF < 32) {
        return "Temperatura baja";
    } else if (datoF >= 32 && datoF < 68) {
        return "Temperatura adecuada";
    } else if (datoF >= 68 && datoF <= 96) {
        return "Temperatura alta";
    } else {
        return "Temperatura desconocida";
    }
}
let celcius = parseInt(prompt(`Ingresa una temperatura en celcius`));

    while (Number.isNaN(celcius)) {

        celcius = parseInt(prompt(`Error. Ingresa una temperatura en celcius`));

    }

let fahrenheit = covertirTemperatura(celcius);
alert(`Temperatura en Celcius: ${celcius.toFixed(2)}°C\nTemperatura en fahrenheit: ${fahrenheit.toFixed(2)}°F\n${temperatura(fahrenheit.toFixed(2))}`);
