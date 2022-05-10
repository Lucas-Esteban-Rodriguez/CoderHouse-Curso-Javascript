// Obtener Historial del LocalStorage y mostrar

let historial = []

for (let index = 0; index < localStorage.length; index++) {
    let item = getItem(index)
    EnviaralHistorial(item)
    historial.push(' ' + item)
}

// Funciones del local storage

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
        setItem(index, $('#text').html() +' = '+ resultado)
        $('#text').text(resultado)
    } else {
        $('#text').text('error')
    }
}

function EnviaralHistorial(dato) {
    $('#ul').after('<li id="li">'+dato+'</li>')
}

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
        alert('Your mail is sent!');
    }).fail(function(error) {
        alert('Oops... ' + JSON.stringify(error));
    });

})