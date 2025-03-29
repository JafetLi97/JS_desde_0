const saludo = 'Hola \\mundo \n  bienvenidos a\t \"ultimate javascript \"';
console.log(saludo);

// Caracteres de escape
// Para poder imprimir comillas dobles dentro de un string, se utiliza 
// el caracter de escape \ antes de la comilla doble que se quiere imprimir
// dentro del string.

// tipos de caracteres de escape

// \n: salto de linea
// \t: tabulacion
// \": comillas dobles
// \': comillas simples
// \\: barra invertida

// templates strings
// Es una forma mas facil de concatenar strings
// Se utilizan las comillas invertidas ``
// Se pueden utilizar variables dentro de un template string
// Se pueden utilizar expresiones dentro de un template string
// Se pueden utilizar funciones dentro de un template string
// Se pueden utilizar objetos dentro de un template string
// Se pueden utilizar arrays dentro de un template string

const nombre = "Chanchito";
const edad = 5;
const saludo2 = `Hola ${nombre} como estas?`;
console.log(saludo2);