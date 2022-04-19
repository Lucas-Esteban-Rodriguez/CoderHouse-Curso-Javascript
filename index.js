

// Selecionando los botones que hay en html
const uno = document.getElementById('uno')
const dos = document.getElementById('dos')
const tres = document.getElementById('tres')
const cuatro = document.getElementById('cuatro')
const cinco = document.getElementById('cinco')
const seis = document.getElementById('seis')
const siete = document.getElementById('siete')
const ocho = document.getElementById('ocho')
const nueve = document.getElementById('nueve')
const cero = document.getElementById('cero')
const igual = document.getElementById('igual')
const coma = document.getElementById('coma')
const remove = document.getElementById('remove')
const division = document.getElementById('division')
const multiplicacion = document.getElementById('multiplicacion')
const suma = document.getElementById('suma')
const resta = document.getElementById('resta')
const text = document.getElementById('text')

// Con el evento .onclick logro que se muestre el caracter del boton que estamos apretando

uno.onclick = () => {
    text.textContent = text.textContent + '1';
}
dos.onclick = () => {
    text.textContent = text.textContent + '2';
}
tres.onclick = () => {
    text.textContent = text.textContent + '3';
}
cuatro.onclick = () => {
    text.textContent = text.textContent + '4';
}
cinco.onclick = () => {
    text.textContent = text.textContent + '5';
}
seis.onclick = () => {
    text.textContent = text.textContent + '6';
}
siete.onclick = () => {
    text.textContent = text.textContent + '7';
}
ocho.onclick = () => {
    text.textContent = text.textContent + '8';
}
nueve.onclick = () => {
    text.textContent = text.textContent + '9';
}
cero.onclick = () => {
    text.textContent = text.textContent + '0';
}
division.onclick = () => {
    text.textContent = text.textContent + '/';
}
suma.onclick = () => {
    text.textContent = text.textContent + '+';
}
resta.onclick = () => {
    text.textContent = text.textContent + '-';
}
multiplicacion.onclick = () => {
    text.textContent = text.textContent + '*';
}
coma.onclick = () => {
    text.textContent = text.textContent + ',';
}
igual.onclick = () => {
}
remove.onclick = () => {
}


// Declaracion de variables
let num1
let operador
let num2
let resultado
let historial = []

// Funcion Resolver
function resolver(num1,num2,operador) {
    switch (operador) {
        case '+':
            return parseFloat(num1) + parseFloat(num2);
            break;
        case '-':
            return parseFloat(num1) - parseFloat(num2);
            break;
        case '*':
            return parseFloat(num1) * parseFloat(num2);
            break;
        case '/':
            return parseFloat(num1) / parseFloat(num2);
            break;
    }
}