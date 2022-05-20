//Declarando variables

let resultado
let historial = []

// Funciones del local storage, funcion para enviar items, recibir items y borrar los items.

const setItem = (clave,valor) => {localStorage.setItem(clave,valor)}

function getItem(clave) {
    return localStorage.getItem(clave)
}

const removeItem = () => {
    for (let index = 0; index < localStorage.length; index++) {
        $('#li').remove()
    }
    localStorage.clear()
}

// Obtener Historial del LocalStorage y mostrar

for (let index = 0; index < localStorage.length; index++) {
    let item = getItem(index)
    EnviaralHistorial(item)
    historial.push(' ' + item)
}

// Armando funciones esenciales: Mostrar elementos en el dom, remover elementos, reiniciar la calculadora y
// reolver las cuentas

const MostrarDom = (e) => {$('#text').append(e)}

const Remove = () => {
    let text = $('#text').html()
    $('#text').text(text.substring(0, text.length -1))
}

const Reiniciar = () => {$('#text').text('')}

const Resolver = () => {
    resultado = math.evaluate($('#text').html())
    EnviaralHistorial($('#text').html() +' = '+ resultado)
    let index = localStorage.length
    setItem(index, $('#text').html() +' = '+ resultado)
    $('#text').text(resultado)
}

function EnviaralHistorial(dato) {
    $('#ul').after('<li id="li">'+dato+'</li>')
}

// Aqui se define el evento click para que el boton de abrir los operadores extras lo realice, y a su vez
// este se reemplace por el boton que cerrara estos operadores extras mediante el evento click

$('#abrirMasOperadores').click(function () {
    setTimeout(function () {

        $('#abrirMasOperadores').addClass('close')
        $('#cerrarMasOperadores').removeClass('close')

    },300)
    
    $('#contenedorMasOperadores').addClass('aparecer')
})

$('#cerrarMasOperadores').click(function () {
    
    $('#cerrarMasOperadores').addClass('close')
    $('#abrirMasOperadores').removeClass('close')

    $('#contenedorMasOperadores').removeClass('aparecer')

})




// Email.js

$('#btnEnviar').on('click', function(event) {

    event.preventDefault();

    var data = {
        service_id: 'service_v1b2woi',
        template_id: 'template_h5ufh19',
        user_id: 'bwb8sKpgHncOZ1URx',
        template_params: {
            'toEmail': document.getElementById('toEmail').value,
            'historial': historial,
        }
    };
     
    $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
        type: 'POST',
        data: JSON.stringify(data),
        contentType: 'application/json'
    }).done(function() {
        alert('Tu mail fue enviado!');
    }).fail(function(error) {
        alert('Oops... ' + JSON.stringify(error));
    });

})

