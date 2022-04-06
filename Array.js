const array = []
let nombre
let dato
let cierre
do {
    nombre = prompt('Nombre del dato que quieres agregar').toLowerCase()
    dato = prompt('Ingrese el valor del dato')
    array.push(' '+nombre +': '+ dato)
    cierre = confirm('¿quiere continuar la carga?')
} while (cierre != false);
alert('Tus datos son: '+array)