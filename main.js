addEventListener("DOMContentLoaded", ()=>{
//     Calcular el sueldo de un empleado dados comodatos de entrada: el nombre, hrs. De trabajo y el pago
// en hora. Pagohora=15300
    let nombre = prompt(`ingrese su nombre`,);
    let hora = Number(prompt(`ingrese sus horas laboradas`,5));
    let Pagohora=hora * 15300

    console.log(`señor ${nombre} su pago por las ${hora} horas laboradas es de ${Pagohora}`)
    }) 