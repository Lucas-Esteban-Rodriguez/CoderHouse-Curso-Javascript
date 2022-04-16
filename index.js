let pn
let operador
let sn
let historial = []

// Funcion Resolver
function resolver(pn,sn,operador) {
    switch (operador) {
        case '+':
            return pn+sn;
            break;
        case '-':
            return pn-sn;
            break;
        case '*':
            return pn*sn;
            break;
        case '/':
            return pn/sn;
            break;
    }
}

// Entrada de datos, confirmación para agregar más y salida

pn = parseFloat(prompt('Ingrese el primer número'))
operador = prompt('Ingrese el operador')
sn = parseFloat(prompt('Ingrese el segundo número'))
resultado = resolver(pn,sn,operador)
historial.push(resultado)
alert(resultado)
do {
    seguir = confirm('¿Quiere seguir agregando operaciones?')
    if (seguir != false) {
        operador = prompt('Ingrese el operador')
        sn = parseFloat(prompt('Ingrese el siguiente número'))
        resultado = resolver(resultado,sn,operador)
        historial.push(resultado)
        alert(resultado)
    } else {
        break
    }
} while (seguir != false);
alert(resultado)

// Pasar datos del historial al HTML

const ul = document.getElementById('historial')
for (const dato of historial) {
    const li = document.createElement('li')
    li.innerHTML = dato
    ul.appendChild(li)
}

// Evento: Abrir historial al clickear boton
const contenedor__historial = document.getElementById('contenedor__historial')
const btn__historial = document.getElementById('btn__historial')
btn__historial.onclick = () => {contenedor__historial.style.display = 'flex'}
