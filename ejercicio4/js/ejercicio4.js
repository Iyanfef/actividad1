function calcular(){
    
    do {
        let op1 = parseInt( prompt("Introducir el primer operando"));
        let op2 =parseInt( prompt("Introducir el segundo operando"));
        let operacion = prompt("Operacion a realizar: \n Sumar: + \n Restar: - \n Multiplicacion: * \n Division: / \n Finalizar: FIN");
        let resultado=parseInt(0);
        if (validarOperador(operador)) {
            switch (operacion) {
                case "+":
                    resultado=op1+op2;
                    break;
                case "-":
                    resultado=op1-op2;
                    break;
                case "*":
                    resultado=op1*op2;
                    break;
                case "/":
                    if (validarOperdor(op1) && validarOperdor(op2)) {
                        resultado= op1/op2;
                    } else {
                        alert("El dividendo o el divisor no son validos")
                    }
                    break;
                case "FIN":
                    break;
            }
        }
        
        alert("resultado: "+resultado)
    } while (operacion!=="FIN");
}

function divisionValida(dividendo, divisor) {
    if (dividendo%1===0 && divisor%1===0) {
        return true;
    } else {
        return false;
    }
}
function validarOperador(operacion) {
    return operacion==="+" || operacion==="-" || operacion==="*" || operacion==="/" || operacion==="FIN"; 
}

calcular();