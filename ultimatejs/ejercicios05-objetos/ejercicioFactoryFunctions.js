// en lugar de usar la funcion constructora, vamos a usar 
// en este ejercicio las factory functions. Cual es la 
// diferencia entre una y otra? respuesta: la factory function
// no necesita el new para crear un objeto, sino que se
// crea directamente con la funcion que la llama.   

const CrearUsuario = (name) => {
  return {
    name: name,
    id: Math.random()
  }
}

let user1 = CrearUsuario('Pepe');
let user2 = CrearUsuario('Juan');

console.log(user1, user2);