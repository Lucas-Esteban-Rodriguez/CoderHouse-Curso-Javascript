function calculadora(num1,num2,operador) {
    switch (operador) {
        case '+':
            return num1+num2;
            if (operador == '=') {
                break;  
            }
        case '-':
            return num1-num2;
            if (operador == '=') {
                break;
            }
        case '*':
            return num1*num2;
            if (operador == '=') {
                break;
        }
        case '/':
            return num1/num2;
            if (operador == '=') {
                break;
            }   
    }
}