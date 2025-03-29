// hay datos de tipo primitivo y datos de tipo referencia

// los primivitos son los que se almacenan en la memoria stack, por ejemplo los numeros, strings, 
// booleanos, null, undefined, symbol

// los datos de tipo referencia son los objetos, arrays, funciones, etc. Estos se almacenan en la
// memoria heap

// cuando se asigna un valor primitivo a una variable, se copia el valor, pero cuando se asigna un
// valor de tipo referencia, se copia la referencia a la memoria heap, por lo que si se modifica el
// objeto, se modifica en todos los lugares donde se haya referenciado. Esto se llama pasar por
// referencia.

// c = {} y b = {} son dos objetos distintos, aunque tengan la misma estructura, son dos objetos
// distintos en la memoria heap, por lo que al intentar compararlos con ===, nos retornará false.

// en cambio si hacemos el sigiente codigo:

// let c = {nombre: 'Chanchito Feliz'};
// let b = c;
// console.log(c === b); // true, porque b y c apuntan al mismo objeto en la memoria heap.

// let a = 10;
// let b = a;
// b++;
// console.log(a,b); // 10, 11

// en este caso, a y b son dos variables distintas en la memoria stack, por lo que al modificar b, no
// se modifica a. a esta en un lado y b en otro, por lo que son independientes.



let a = {};
let b = a;

b.prop = 1;
console.log(a,b); 

// en este caso, a y b son dos variables distintas en la memoria stack, pero como son objetos, se
// almacenan en la memoria heap, por lo que al modificar b, se modifica a, porque ambos apuntan al
// mismo objeto en la memoria heap.

//que ocurre con las funciones 

// let num = 1;


// function suma(n){
//     n++;
// }

// suma(num);
// console.log(num); // 1

// en este caso, num es una variable primitiva, por lo que al pasarla a la funcion suma, se copia el
// valor, por lo que al modificar n, no se modifica num. en palabras simples, num y n son dos
// variables distintas en la memoria stack.

let num = {prop: 1};

function suma(n){
    n.prop++;
}

suma(num);
console.log(num); // {prop: 2}

// los tipos de datos primitivos se copian cuando los asignamos a una variable, pero los objetos se
// pasan por referencia, por lo que al modificar un objeto dentro de una funcion, se modifica el
// objeto original. En palabras simples, n y num son dos variables distintas en la memoria stack,
// pero apuntan al mismo objeto en la memoria heap.

