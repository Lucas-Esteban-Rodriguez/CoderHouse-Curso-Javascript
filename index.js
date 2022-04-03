let num1
let num2
let operador


num1 = parseInt(prompt ('Ingrese el primer numero'))
operador = prompt ('Ingrese operador')
num2 = parseInt(prompt ('Ingrese el segundo numero'))
alert (num1 + operador + num2 + '=' + calculadora(num1,num2,operador))
function calculadora(num1,num2,operador) {
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
        case '=':
            return num1+num2;
                break;  
    }
}