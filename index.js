// Obtener Historial del LocalStorage

for (let index = 0; index < localStorage.length; index++) {
    let item = getItem(index)
    EnviaralHistorial(item)
}

// Funciones de agregar, obtener y borrar del Localstorage

function setItem(clave,valor) {
    localStorage.setItem(clave,valor)
}

function getItem(clave) {
    return localStorage.getItem(clave)
}

function removeItem() {
    localStorage.clear()
    location.reload()
}

// Obteniendo elemento para utilizar en funciones y declarando variable resultado para el historial

const texto_calculadora = document.getElementById ('text')
let resultado

// Armando funciones esenciales: Mostrar elementos en el dom, remover elementos, reiniciar la calculadora y
// reolver las cuentas

function MostrarDom(e) {
    texto_calculadora.textContent += e
}

function Remove() {
    let text = texto_calculadora.innerHTML
    texto_calculadora.innerHTML = text.substring(0, text.length -1)
}

function Reiniciar() {
    texto_calculadora.textContent = ''
}

function Resolver() {
    if (texto_calculadora.innerHTML) {
        let text = texto_calculadora.innerHTML
        resultado = eval(text)
        EnviaralHistorial(texto_calculadora.innerHTML +' = '+ resultado)
        let index = localStorage.length
        setItem(index,texto_calculadora.innerHTML +' = '+ resultado)
        texto_calculadora.textContent = resultado
    } else {
        texto_calculadora.textContent = 'error'
    }
}

function EnviaralHistorial(dato) {
    const ul = document.getElementById('ul')
    const li = document.createElement('li')
    li.innerHTML = dato
    ul.appendChild(li)
}