
function esEntero(num) {
    if (num===parseInt(num)) {
        return true;
    } else {
        return false;
    }
    

}
function esPositivo(num) {
    if (num>=0) {
        return true;
    } else {
        return false;
    }
}
function sumatorio(numero) {
    let resultado = 0;
    do {
        for (let i = 1; i <= numero; i++) {
            resultado += i;
        }
        return resultado;
    } while (!esPositivo && !esEntero);
    
}
var numero = parseInt(prompt("Introduce un numero: "))
sumatorio();