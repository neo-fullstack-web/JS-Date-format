// ? 1642708268000 => Thu Jan 20 2022 16:51:08 GMT-0300 (hora estándar de Argentina)
         //  DD/MM/YYYY
function formatearFecha(fechaTimestamp) {

    const fecha = new Date(fechaTimestamp)

    let dia = fecha.getDate() //día de la semana 20
    let mes = fecha.getMonth() + 1 //Get month me devuelve el número del mes pero comenzando como un array por lo tanto Enero es 0, Diciembre 11, etc
    const year = fecha.getFullYear(); //2022
    
    // Corregir la falta de dígito cuando el valor de día o mes sea menor que 10
    if(dia < 10) { dia = '0' + dia };

    mes = String(mes).padStart(2, '0')
    // retorno la fecha formateada para guardar en una variable y utilizar al pintar mi fila de la tabla
    return `${dia}/${mes}/${year}`;
}

const fecha = formatearFecha(1642708268000)

console.log(fecha)

const formatter = Intl.DateTimeFormat('sp-AR', { day: '2-digit', month: '2-digit', year: 'numeric' });
const fechaIntl = formatter.format(1642708268000);

console.warn(fechaIntl)
// `${fecha.getDate()}/${fecha.getMonth() +1}/${fecha.getFullYear()}`
// '20/1/2022'
// String( fecha.getMonth() + 1  ).padStart(2, '0')
// '01'
// const mes  = fecha.getMonth() + 1
// undefined
// let mes  = fecha.getMonth() + 1
// VM1954:1 Uncaught SyntaxError: Identifier 'mes' has already been declared
// let mes1 = fecha.getMonth() + 1
// undefined
// if(mes1 < 10) mes1 = '0' + mes1
// '01'

function calcularDiferenciaEntreFechas(fechaAnterior) {

    //Obtengo la fecha actual con Date now y calculo la diferencia con la fechaAnterior
    let diff = Math.abs(Date.now() - fechaAnterior);    //1681863696777

    //Transformo la diferencia a días me dejo la parte entera
    let diffDias = Math.floor(diff / 1000 / 60 / 60 / 24); 

    //Si la dif en días es menor a 1 mes entonces devuelvo x días
    if(diffDias <= 30) {
        return `Pasaron ${diffDias} ${diffDias > 1 ? 'días' : 'día'}` 
    }

    //Si no ingrese al if anterior calculo la cantidad de meses
    let diffMeses = Math.floor(diffDias / 30);

    //Si los meses son menores a 1 año devuelvo x cant de mes/es
    if(diffMeses < 12) {
        return `Pasaron ${diffMeses} ${diffMeses > 1 ? 'meses': 'mes'}`
    }

    //Obtengo la cantidad de años y los meses restantes 
    let diffAños = Math.floor(diffMeses / 12);
    let mesesRestantes = diffMeses % 12;

    // Si no tengo meses restantes !false retorno solo cantidad de años
    if(!mesesRestantes) {
        return `Pasaron ${diffAños} ${diffAños > 1 ? 'años': 'año'}`
    }

    // Y finalmente si no es ninguno de los casos anteriores devuelvo el detalle de la diferencia en años y meses
    return `Pasaron ${diffAños} ${diffAños > 1 ? 'años': 'año'} y ${mesesRestantes} ${mesesRestantes > 1 ? 'meses': 'mes'}`;


    // ? Hace 19 días
    // ? Hace 2 meses
    // ? Hace 1 año
    // ? Hace 1 año y Xmeses
}
//Llamo a la funcion pasando un parametro de fecha y espero que me retorne un resultado así almaceno en mi variable diferencia.
const diferencia = calcularDiferenciaEntreFechas(1678592085000);

console.log(diferencia)