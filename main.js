addEventListener("DOMContentLoaded", ()=>{
    // Escribir un programa que calcule el volumen de un elipsoide
    // V = (4/3) * PI * a * b *c
     let valor1 = Number(prompt(`ingrese el valor #1`,3))
     let valor2 = Number(prompt(`ingrese el valor #2`,6))
     let valor3 = Number(prompt(`ingrese el valor #3`,2))
     let volumes = (4/3) * Math.PI * valor1 * valor2 * valor3

     console.group
        console.log (`el volumen de un elipsoide es ${volumes}`)
    console.groupEnd
    }) 