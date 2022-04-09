const array = []
let nombre
let dato
let cierre
let eliminar
let datoeliminado
let i = 1
let index = 1
do {
    nombre = prompt('Nombre del dato que quieres agregar').toLowerCase()
    dato = prompt('Ingrese el valor del dato')
    array.push(' ' +i+ '-' +nombre +': '+ dato)
    cierre = confirm('¿quiere continuar la carga?')
    i++
} while (cierre != false);
alert('Tus datos son: '+array)
