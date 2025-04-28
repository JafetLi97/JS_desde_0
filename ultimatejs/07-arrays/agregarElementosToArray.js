const letras = ['a', 'b'];

// Agregar un elemento al final del array
letras.push('c', 'd');
console.log(letras); // ['a', 'b', 'c']

// Agregar un elemento al principio del array
letras.unshift('y', 'z');
console.log(letras); // ['y', 'z', 'a', 'b', 'c']

// Agregar un elemento en una posición específica
letras.splice(2, 0, 1,2); // el primer argumento es la posición, 
// el segundo es cuántos elementos se eliminarán, que es 0 si no se quiere eliminar nada
// el tercero es el elemento a agregar, se agregara justamente en la posicion que le indicamos
console.log(letras); // ['y', 'z', 'x', 'a', 'b', 'c']