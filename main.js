addEventListener("DOMContentLoaded", ()=>{
//     Programa que muestre el pago de una llamada telefónica sabiendo que cada minuto cuesta $355
// pesos y un IVA de 20%.
    let valor = Number(prompt(`ingrese la duracion de la llamada (minuto)`));
    let costo = valor * 355;
    let iva = costo + (costo * 0.20)

    console.log(`el pago de una llamada telefónica corresoponde a ${iva}`)
    }) 