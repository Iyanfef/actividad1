
function comprobar() {
    do {
        var sumatorio=0;
        var numero=prompt("Teclee un numero entero positivo");

        if (!isNaN(numero) && numero>0) {
            sumatorio+=numero;
        } else {
            console.error("No es un muero válido");
        }


    } while (isNaN(num) || num<0);
    console.log(sumatorio);
}
comprobar();