addEventListener("DOMContentLoaded", ()=>{
//     Una farmacia aplica al precio de los remedios el 10% de descuento, hacer un programa que
// ingresando el costo de los medicamentos calcules el descuento y el precio final.
    let valor = Number(prompt(`ingrese el valor del medicamento`,3600));
    let desc = valor - (valor * 0.10)

    console.log(`el valor del medicamento es de ${desc}`)
    }) 