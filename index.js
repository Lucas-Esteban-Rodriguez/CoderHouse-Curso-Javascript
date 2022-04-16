let num1
let operador
let num2
let historial = []

// Funcion Resolver
function resolver(pn,sn,operador) {
    switch (operador) {
        case '+':
            return num1+num2;
            break;
        case '-':
            return num1-num2;
            break;
        case '*':
            return num1*num2;
            break;
        case '/':
            return num1/num2;
            break;
    }
}

// Entrada de datos, confirmación para agregar más y salida

num1 = parseFloat(prompt('Ingrese el primer número'))
operador = prompt('Ingrese el operador')
num2 = parseFloat(prompt('Ingrese el segundo número'))
resultado = resolver(num1,num2,operador)
historial.push(resultado)
alert(resultado)
do {
    seguir = confirm('¿Quiere seguir agregando operaciones?')
    if (seguir != false) {
        operador = prompt('Ingrese el operador')
        num2 = parseFloat(prompt('Ingrese el siguiente número'))
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

// // Evento: Abrir historial al clickear boton
// const contenedor__historial = document.getElementById('contenedor__historial')
// const btn__historial = document.getElementById('btn__historial')
// btn__historial.onclick = () => {contenedor__historial.style.display = 'flex'}
