// Obtener Historial del LocalStorage

for (let index = 0; index < localStorage.length; index++) {
    let item = getItem(index)
    EnviaralHistorial(item)
}

// Funciones de agregar, obtener y borrar del Localstorage

const setItem = (clave,valor) => {localStorage.setItem(clave,valor)}

function getItem(clave) {
    return localStorage.getItem(clave)
}

const removeItem = () => {
    localStorage.clear()
    location.reload()
}

// Declarando variable resultado para el historial

let resultado

// Armando funciones esenciales: Mostrar elementos en el dom, remover elementos, reiniciar la calculadora y
// reolver las cuentas

const MostrarDom = (e) => {$('#text').append(e)}

const Remove = () => {
    let text = $('#text').html()
    $('#text').text(text.substring(0, text.length -1))
}

const Reiniciar = () => {$('#text').text('')}

const Resolver = () => {
    if ($('#text').html()) {
        let text = $('#text').html()
        resultado = eval(text)
        EnviaralHistorial($('#text').html() +' = '+ resultado)
        let index = localStorage.length
        setItem(index,$('#text').html() +' = '+ resultado)
        $('#text').text(resultado)
    } else {
        $('#text').text('error')
    }
}

function EnviaralHistorial(dato) {
    $('#ul').after('<li id="li">'+dato+'</li>')
}