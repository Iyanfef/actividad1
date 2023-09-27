function divisible(){
do {
    num = prompt("Introduce un numero entre 1 y 100")
} while (!(1<=num<=100));
if (num % 2 ==0) {
    console.log("Es divisible entre 2");
}
if (num % 3 ==0) {
    console.log("Es divisible entre 3");
}
if (num % 5 ==0) {
    console.log("Es divisible entre 5");
}
if (num % 10 ==0) {
    console.log("Es divisible entre 10");
}

}
divisible();