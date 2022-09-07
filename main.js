addEventListener("DOMContentLoaded", ()=>{
    //     Escribir un programa que calcule el área y el volumen de un cilindro:
    // A = (2 * (PI * r˄2)) + ((2 * PI * r) * h)
    // V = (PI * r2) * h
        let valor1 = Number(prompt("Ingrese el radio del cilindro", 3));
        let valor2 = Number(prompt("Ingrese la altura del cilindro", 3));
        let A = (2 * (Math.PI * valor1)) + ((2 * Math.PI * valor1) * valor2)
        let V = (Math.PI * valor1) * valor2
        console.group();
            console.log(`el áreae un cilindro : "${A}"`);
        console.groupEnd();
        console.group();
            console.log(`l volumen de un cilindro : "${V}"`);
        console.groupEnd();
    
    
    })