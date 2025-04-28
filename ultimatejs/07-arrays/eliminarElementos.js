// eliminar elementos en un array

const letras = ['a', 'b', 'c', 'd'];

// metodo pop() elimina el último elemento del array
// letras.pop();
// console.log(letras); // ['a', 'b', 'c']

// se puede asignar este elemento a una variable
// const ultimoElemento = letras.pop();
// console.log(ultimoElemento, letras); // 'c'


// metodo shift() elimina el primer elemento del array
let comienzo = letras.shift(); 
console.log(comienzo,letras); // a  ['b', 'c', 'd']

// metodo splice() elimina elementos en una posición específica
// el primer argumento es la posición,
// el segundo es cuántos elementos se eliminarán a partir de esa posición

let entremedio = letras.splice(1, 1);   
console.log(entremedio, letras); // ['c'] ['b', 'd']