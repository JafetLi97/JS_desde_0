// objetos que ya vienen en js

// Math

// Math es un objeto que tiene propiedades y metodos para realizar operaciones matematicas

Math.PI; // retorna el valor de PI

Math.abs(-10); // retorna el valor absoluto de un numero. En este caso 10

Math.ceil(6.1); // redondea un numero hacia arriba.    En este caso 7

Math.floor(6.9); // redondea un numero hacia abajo.   En este caso 6

Math.round(6.5); // redondea un numero. En este caso 7

Math.random(); // retorna un numero aleatorio entre 0 y 1. funciona como un generador de numeros aleatorios
// entre 0 y 1.

Math.max(1,2,3,4,5); // retorna el numero mas grande de una lista de numeros

Math.min(1,2,3,4,5); // retorna el numero mas pequeño de una lista de numeros

Math.pow(2,3); // retorna la potencia de un numero. en este caos 2^3 = 8

Math.sqrt(9); // retorna la raiz cuadrada de un numero. En este caso 3

console.log(Math.PI); // 3.141592653589793



const aleatorio = (min,max) => {
    return Math.floor(Math.random() * (max - min)) + min; // ejemplo de ejecucion: 0.5 * (10 - 1) + 1 = 5
}

console.log(aleatorio(1,10)); // retorna un numero aleatorio entre 1 y 100