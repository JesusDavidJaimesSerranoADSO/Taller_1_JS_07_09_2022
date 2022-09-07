addEventListener("DOMContentLoaded", ()=>{
    // Escribir un programa que calcule el volumen de una esfera:
    // Radio = 3 volumen de la esfera = 4/3 * PI * radio˄3
    let radio = Number(prompt("Ingrese el radio de la esfera", 3));

    console.group();
        console.log(`calcule el volumen de una esfera : "${(4/3) * Math.PI * Math.pow(radio,3)}"`);
    console.groupEnd();


})