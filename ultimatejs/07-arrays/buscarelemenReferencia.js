const usuarios = [
  { id: 1, nombre: 'chanchito' },
  { id: 3, nombre: 'chanchito' },
  { id: 2, nombre: 'feliz' }
];

const resultado = usuarios.indexOf({ id: 1, nombre: 'chanchito' }); // -1

console.log(resultado); // -1
// la razon por la que no encuentra el objeto es porque indexOf 
// compara las referencias de memoria, no los valores de los objetos
// si queremos buscar un objeto en un array, lo que podemos hacer es
// usar el metodo find() que recibe una funcion callback

// a este tipo de funciones que reciben de argumento otra funcion 
// se les conoce como predicte, que devuelven un valor booleano
// true o false
const result = usuarios.findIndex(usuario => 
   usuario.nombre === 'chanchito');
console.log(result); // { id: 1, nombre: 'chanchito' }
// si no encuentra el objeto, devuelve undefined


// Qué pasa cuando tenemos un objeto en este caso de igual ID Y el que
// Me interesa encontrar es el segundo elemento que tiene ID uno y no el primero?

// Hay que Asegurarse de qué La propiedad que vamos a evaluar tiene que
// Siempre ser unica en el objeto que estamos buscando, en este caso el ID
// Para eso se puede usar el metodo findIndex() que devuelve el indice del
// elemento que cumple con la condición