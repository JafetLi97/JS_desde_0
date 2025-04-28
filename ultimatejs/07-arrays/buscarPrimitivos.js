// buscar primitivos

const letras = ['a', 'b', 1, 'c', 'd', 1];

console.log(letras.indexOf('c')); // 2 // devuelve la posición del elemento en el array
console.log(letras.indexOf(1)); // -1 // si el elemento no existe devuelve -1
// en caso de que existan varios elementos iguales, devuelve la posición del primero que encuentre

// como podria hacer yo para que me devuelva el indice no del 
// primer elemento que encuentre si no del segundo?

console.log(letras.lastIndexOf(1)); // 5 // devuelve la posición del último elemento en el array
// en lugar de buscar de izquierda a derecha, busca de derecha a izquierda

// para saber si un elemento se encuentra en un array se puede usar
// el método includes(), de manera que no es necesario ya hacer la
// validacion de : if(letras.indexOf('c') !== -1)

console.log(letras.includes('c')); // true
console.log(letras.includes('z')); // false


// en este tipo de busqueda de datos primitivos el tipo de dato es 
// importante, por lo que si se busca un número 1, no es lo mismo que
// buscar un string '1'

// como hacerle para empezar a buscar desde una posición específica
// en lugar de buscar desde el principio del array?

console.log(letras.indexOf(1, 3)); // 5 // el segundo argumento es la posición desde la que se empieza a buscar
console.log(letras.lastIndexOf(1, 3)); // 2 // el segundo argumento es la posición desde la que se empieza a buscar
console.log(letras.includes(1, 3)); // true // el segundo argumento es la posición desde la que se empieza a buscar