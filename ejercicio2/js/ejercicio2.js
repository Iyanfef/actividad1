function orden() {
    var nums = [];
    var esCreciente = true;

    for (var i = 0; i < 4; i++) {
        var num;
        do {
            num = parseFloat(prompt("Introduce el número " + (i + 1) + ":"));
            if (isNaN(num) || num <= 0 || num % 1 !== 0) {
                console.error("El número debe ser un entero positivo.");
            }
        } while (isNaN(num) || num <= 0 || num % 1 !== 0);

        nums.push(num);
    }

    for (var j = 0; j < nums.length - 1; j++) {
        if (nums[j] >= nums[j + 1]) {
            esCreciente = false;
            break;
        }
    }

    if (esCreciente) {
        console.log("Los números están en orden creciente.");
    } else {
        console.log("Los números no están en orden creciente.");
    }
}

orden();
