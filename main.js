addEventListener("DOMContentLoaded", ()=>{
    // Realice un algoritmo que a partir de proporcionarle la velocidad de un automóvil expresada en
    // kilómetros por hora, proporcione la velocidad en metros por segundos.
    let valor = Number(prompt(`ingrese la velocidad en kilometros/hora`,15))
    let conv = valor * 1000 / 60 /60 

    console.group
        console.log(`la velocidad de un automóvil expresada en kilómetros por hora: ${valor}`)
    console.groupEnd
    console.group
        console.log(`la velocidad de un automóvil en metros por segundos: ${conv}`)
    console.groupEnd
    }) 