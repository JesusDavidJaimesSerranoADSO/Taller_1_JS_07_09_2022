addEventListener("DOMContentLoaded", ()=>{
//     Hacer un diagrama para convertir de grados centígrados a grados Fahrenheit.
    let valor = Number(prompt(`ingrese la temperatura`,32));
    let convercion = valor * 1.8 + 32
    
    console.log(`la temperatura en grados Fahrenheit es ${convercion}`)
    }) 