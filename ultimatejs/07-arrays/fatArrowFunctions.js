// hasta ahora para crear una funcion se tenia que hacer de esta manera:

// function saludo() {
//    return 'Hola';
// }

// const result = saludo(); // Hola
// console.log(result);


// pero con las arrow functions se puede hacer de esta manera:

const saludo = () => 'Hola';
const result = saludo(); // Hola
console.log(result);

// las FAF son anonimas, pero se pueden asignar a una variable
// de esta manera:

const saludo2 = msj => 'Hola ' + msj;  // cuando es una sola linea 
// se pueden saltar las llaves y cuando solo hay un parametro se 
// pueden omitir los parentesis
const result2 = saludo2('chanchito feliz'); // Hola chanchito feliz
console.log(result2);