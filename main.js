addEventListener("DOMContentLoaded", ()=>{
//     Escribir un algoritmo que permita obtener las raíces reales de la ecuación de segundo grado: A * x2 +
// b * x + c, siendo X un valor constante.
    let valor1 = Number(prompt(`ingrese el valor 1`,2));
    let valor2 = Number(prompt(`ingrese el valor 2`,5));
    let valor3 = Number(prompt(`ingrese el valor 3`,2));
    let suma = Math.sqrt(valor2**2-(4*valor1*valor3));
    let raiz = ((-1*valor2) + suma);
    let divicion =  raiz / 2 * valor1;

    console.log (`ecuación de segundo grado: A * x2 + b * x + c da como resultado ${divicion}`)
    
    })