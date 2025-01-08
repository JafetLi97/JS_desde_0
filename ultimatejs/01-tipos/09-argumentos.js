//argumentos

// los argumentos son valores que se pasan a una funcion cuando se invoca. los argumentos se pueden pasar a una funcion en cualquier orden y
// se pueden pasar cualquier cantidad de argumentos. 

function suma(a, b) {
    console.log(arguments);
    return a + b;
}

let result = suma(5, 6, 1, 2, 3); // 10
console.log(result);

console.log(typeof suma); // function