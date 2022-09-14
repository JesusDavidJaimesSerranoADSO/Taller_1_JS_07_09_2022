addEventListener("DOMContentLoaded", ()=>{
    // Un estudiante realiza cuatro exámenes. Realizar el pseudocódigo que representen el algoritmo
    // correspondiente para obtener el promedio de las calificaciones obtenidas. las calificaciones van 1 a 5
    // puntos.
    let valor1 = Number(prompt(`ingrese la nota del examen 1`,5));
    let valor2 = Number(prompt(`ingrese la nota del examen 2`,6));
    let valor3 = Number(prompt(`ingrese la nota del examen 3`,5));
    let valor4 = Number(prompt(`ingrese la nota del examen 4`,6));
    let prom = (valor1 + valor2 + valor3 + valor4) / 4

    console.log(`el promedio de las notas es de ${prom}`)
    }) 