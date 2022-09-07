addEventListener("DOMContentLoaded", ()=>{
    // Escribir un programa que evalúe la siguiente expresión:
    // (a+7*c)/(b+2-a)+2*b
    let valor1 = Number(prompt("Ingrese el primer valor", 3));
    let valor2 = Number(prompt("Ingrese el segundo valor", 5));
    let valor3 = Number(prompt("Ingrese el tercer  valor", 8));

    console.group();
        console.log(`la siguiente expresión: : "(${(valor1+7*valor3)} / ${valor2+2-valor1} + ${2*valor2})"`);
    console.groupEnd();
    console.group();
        console.log(`calcule el volumen de una esfera : "${(valor1+7*valor3)/(valor2+2-valor1)+2*valor2}"`);
    console.groupEnd();


})