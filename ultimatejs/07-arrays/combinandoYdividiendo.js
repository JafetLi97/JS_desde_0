// combinando y dividiendo arrays

let array1 = [1, 2];
let array2 = [3, 4]

// para unir dos arrays podemos usar el metodo concat
let combinados = array1.concat(array2);
console.log(combinados, array1, array2); // [1, 2, 6, 7]
// el metodo concat no modifica los arrays originales
// sino que devuelve un nuevo array con los elementos de ambos arrays 
// unidos
// si queremos modificar el array original, podemos usar el metodo push
// array1.push(...array2);
// console.log(array1, array2); // [1, 2, 3, 4]
// // el operador spread (...) nos permite expandir los elementos de un array
// // en otro array o en una funcion
// // por ejemplo, si tenemos una funcion que recibe varios argumentos
// function sumar(a, b, c) {
//     return a + b + c;
// }
// // podemos usar el operador spread para pasarle un array como argumento
// let numeros = [1, 2, 3];
// console.log(sumar(...numeros)); // 6
// // el operador spread es muy util para combinar arrays o para pasar
// // arrays como argumentos a funciones
// // ademas, podemos usar el operador spread para combinar arrays
// // y objetos
// let objeto1 = { a: 1, b: 2 };
// let objeto2 = { c: 3, d: 4 };
// let objeto3 = { ...objeto1, ...objeto2 };
// console.log(objeto3); // { a: 1, b: 2, c: 3, d: 4 }
// // el operador spread nos permite combinar objetos de la misma forma
// // que combinamos arrays
// // ademas, podemos usar el operador spread para copiar objetos
// let objeto4 = { ...objeto1 };
// console.log(objeto4); // { a: 1, b: 2 }
// el operador spread nos permite hacer una copia superficial de un objeto
// sin modificar el objeto original
// sin embargo, si el objeto tiene propiedades que son objetos
// el operador spread solo copia la referencia al objeto
// por lo que si modificamos el objeto copiado, el objeto original
// tambien se vera afectado

// dividiendo arrays

let divididos = combinados.slice(1, 3); // combinados [1, 2, 3, 4]
console.log(divididos); // [2, 3]
// el metodo slice nos permite dividir un array en partes
// el primer argumento es el indice desde donde queremos empezar a
// dividir y el segundo argumento es el indice hasta donde queremos
// dividir. el segundo argumento es opcional y si no lo pasamos
// el metodo slice devolvera un nuevo array con todos los elementos
// desde el primer argumento hasta el final del array. el segundo argumento no
// incluye el elemento que le indicamos
// por ejemplo, si tenemos un array con 5 elementos y queremos dividirlo
// desde el indice 1 hasta el indice 3, el metodo slice devolvera
// un nuevo array con los elementos en los indices 1 y 2
// es decir, el elemento en el indice 3 no se incluira en el nuevo array
// por lo que el nuevo array tendra 2 elementos
// si queremos dividir un array desde el final, podemos usar
// indices negativos


// el metodo slice no modifica el array original
// sino que devuelve un nuevo array con los elementos divididos


// si queremos modificar el array original, podemos usar el metodo splice
// el metodo splice nos permite eliminar o agregar elementos a un array
// el primer argumento es el indice desde donde queremos empezar a
// eliminar o agregar elementos, el segundo argumento es la cantidad
// de elementos a eliminar y el tercer argumento son los elementos
// a agregar

// esa no es la forma de dividir un array en cuanto al metodp slice, tambien
// se puede hacer pasando solo el primer argumento que indica la posicion
// desde donde queremos empezar a dividir
let array5 = [1, 2, 3, 4, 5];
let array6 = array5.slice(2); // [3, 4, 5]
console.log(array6); // [3, 4, 5]

// slice tambien se puede usar para copiar un array
let array7 = [1, 2, 3, 4, 5];
let array8 = array7.slice(); // [1, 2, 3, 4, 5]
console.log(array8); // [1, 2, 3, 4, 5]
// el metodo slice sin argumentos devuelve una copia del array