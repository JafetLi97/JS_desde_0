let nombre = 'Juan';

console.log(nombre); // Juan

// var
// let
// const

//existen dos tipos de datos 

// Primitivos
// Los tipos de datos primitivos son los valores más simples que JavaScript puede manejar. Son inmutables (es decir, no se pueden cambiar) 
// y se copian por valor. Los tipos de datos primitivos son: string, number, boolean, null, undefined, symbol.

// ejemplos de primitivos

// number, string, boolean, null, undefined, symbol


// De Referencia

// Los tipos de datos de referencia son objetos. Son mutables (es decir, se pueden cambiar) y se copian por referencia.
// Los tipos de datos de referencia son: object, array, function.

// ejemplos de referencia

// object, array, function, clases

// existe un tipo de dato especial que es NaN, que significa not a number. este tipo de dato es de tipo number pero no es un numero valido.


// typeof

// typeof es un operador que devuelve el tipo de dato de una variable o una expresión. typeof es un operador de JavaScript que devuelve 
// una cadena que indica el tipo de operando sin evaluarlo.

// typeof 1; // 'number'
// typeof 'hello'; // 'string'
// typeof true; // 'boolean'
// typeof null; // 'object'
// typeof undefined; // 'undefined' 
// typeof {}; // 'object'


// tipos de memoria. existe la memoria stack y la memoria heap. la memoria stack es una memoria de tipo LIFO (last in first out) y 
// la memoria heap es una memoria de tipo FIFO (first in first out). la memoria stack es una memoria de tipo limitado y la memoria heap 
// es una memoria de tipo ilimitado. en la memoria stack se almacenan los tipos de datos primitivos y en la memoria heap se almacenan los 
// tipos de datos de referencia. los tipos de datos de referencia son objetos y estos objetos se almacenan en la memoria heap y en la 
// memoria stack se almacena la referencia a ese objeto. Ejemplo de memoria stack y memoria heap:

// stack:
// nombre -> 'Juan'
// edad -> 30
// casado -> true
// persona -> 0x1234

// heap:
// 0x1234 -> {
//     nombre: 'Juan',
//     edad: 30,
//     casado: true
// }




// let a = {nombre: 'Juan'};
// let b = a;
// a.nombre = 'Pedro';
// console.log(b.nombre); // Pedro

// en este caso la variable a y la variable b apuntan al mismo objeto en la memoria heap, por lo tanto si se modifica el objeto a tambien
// se modifica el objeto b.








