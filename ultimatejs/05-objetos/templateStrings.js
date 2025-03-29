// template strings

let nombre = "Perro";
let apellido = "Chanchito";

const plantila = `Hola ${nombre} ${apellido} feliz! 

bienvenido a "El maravilloso mundo de disney ;)" 

Cariñosamente, Chanchito`;


console.log(plantila); // retorna el string con los saltos de linea y las comillas dobles
// se pueden utilizar variables, expresiones, funciones, objetos y arrays dentro de un template string
// se utilizan las comillas invertidas ``


const plantilla = (nombre, apellido) => {
  return `Hola ${nombre} ${apellido} como estas?`;
}

console.log(plantilla("Chanchito", "Feliz")); // retorna el string con los valores de las variables
// se pueden utilizar variables, expresiones, funciones, objetos y arrays dentro de un template string