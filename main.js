addEventListener("DOMContentLoaded", ()=>{
    // Dado el valor que un cliente paga por un producto, calcular qué valor corresponde al costo total del
    // producto y cuánto es el valor del IVA. Considerando que el porcentaje del IVA puede variar en el
    // tiempo y de un producto a otro, este dato se lee por teclado.
    let valor = Number(prompt(`ingrese el valor del producto`,1600));
    let iva = Number(prompt(`ingrese el valor del IVA`,10));
    let iva2 = iva / 100
    let nTotal = valor + (valor * iva2)

    console.log(`promedio final de la materia de algoritmos es ${nTotal}`)
    }) 