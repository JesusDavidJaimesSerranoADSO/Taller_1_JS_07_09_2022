addEventListener("DOMContentLoaded", ()=>{
//     Un vendedor recibe un sueldo base más el 10% de comisión sobre sus ventas. Si en un mes
// cualquiera hace tres ventas por valores: v1, v2 y v3, ¿cuánto recibirá por comisión? y ¿cuánto en total
// sueldo del vendedor?.
    let valor1 = Number(prompt(`ingrese el valor de la venta 1`,5000));
    let valor2 = Number(prompt(`ingrese el valor de la venta 2`,6000));
    let valor3 = Number(prompt(`ingrese el valor de la venta 3`,35000));
    let sbase = 1000000
    let com = (valor1 + valor2 + valor3) * 0.10

    console.log(`el valor de la comision es de ${com}`)
    console.log(`el sueldo total del trabajador es de ${sbase + com}`)
    }) 