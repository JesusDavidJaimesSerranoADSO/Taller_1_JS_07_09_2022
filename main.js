addEventListener("DOMContentLoaded", ()=>{
// //     16. Elaborar un algoritmo para calcular el promedio final de la materia de algoritmos. Dicha calificación se
// compone de los siguientes porcentajes:
// • 55% del promedio final de sus calificaciones de los tres(3) parciales.
// • 30% de la calificación examen final y
// • 15% de la calificación trabajo final.
    let valor1 = Number(prompt(`ingrese el valor del 1 parcial`,7));
    let valor2 = Number(prompt(`ingrese el valor del 2 parcial`,7));
    let valor3 = Number(prompt(`ingrese el valor del 3 parcial`,7));
    let examen = Number(prompt(`ingrese el valor del examen`,6));
    let trabajo = Number(prompt(`ingrese el valor del trabajo final`,3));
    let sparcial = valor1 + valor2 + valor3
    let nTotal = (sparcial * 0.55) + (examen * 0.30) + (trabajo * 0.15)

    console.log(`promedio final de la materia de algoritmos es ${nTotal}`)
    }) 