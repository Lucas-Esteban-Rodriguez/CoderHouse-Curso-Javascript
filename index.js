let pn
let operador
let sn

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

do {
    pn = parseFloat(prompt('Ingrese el primer número'))
    operador = prompt('Ingrese el operador')
    sn = parseFloat(prompt('Ingrese el segundo número'))
    resultado = resolver(pn,sn,operador)
    alert(resultado)
    seguir = confirm('¿Quiere seguir agregando operaciones?')
    if (seguir != false) {
        operador = prompt('Ingrese el operador')
        sn = parseFloat(prompt('Ingrese el siguiente número'))
        resultado = resolver(resultado,sn,operador)
    } else {
        break
    }
    alert(resultado)
} while (false);