// join

let arr1 = ['felipe', 'chanchito', 'perez'];

let msj = arr1.join(', '); // une los elementos de un array en una cadena de texto
// el separador es un espacio
console.log(msj); // felipe chanchito perez


// join() une los elementos de un array en una cadena de texto
// el separador es una coma y un espacio

// Vamos a suponer que lo que queremos Ahora no es juntar los elementos si no separarlos
// [ara ello usamos el método split]

let mensaje = "hola chanchito feliz felipe!";

let dividido = mensaje.split(' '); // divide el string en un array
// el separador es un espacio
console.log(dividido); // ['hola', 'chanchito', 'feliz', 'felipe!']


// Ahora imaginemos que queremos volver a juntarlos

console.log(dividido.join('-')); // hola chanchito feliz felipe!