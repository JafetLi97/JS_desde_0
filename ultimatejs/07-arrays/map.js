// // metodo de map
// // // sirve para transformar un array en otro array
// // // devuelve un nuevo array con los elementos transformados
// // // el array original no se modifica
// // // el array devuelto puede ser de diferente tamaño
// // // el array devuelto puede ser vacio
// // // el array devuelto puede ser igual al original
// // // el array devuelto puede ser un array de objetos
// // // el array devuelto puede ser un array de strings


let usuarios = [
    {edad:17, nombre:'Juan'},
    {edad:13, nombre:'Pedro'},
    {edad:25, nombre:'Maria'},
    {edad:32, nombre:'Jose'},
];

// const listaEdad = usuarios.map( u => u.edad);
// const lista = usuarios.map( u => u.edad >= 18 ? u.nombre : 'Menor de edad' );

// console.log(listaEdad, 'es un array de edades a partir de el map');
// console.log(lista, "es un array de nombres que se muestran con una validacion de edad a partir del map");

// console.log('------------------');
// console.log('el original sigue igual');
// console.log(usuarios);

// console.log('------------------');
// console.log('------------------');          
// console.log('------------------');
// console.log('------------------');


// // lo que queremos hacer es construir un elemento html

// // usaremos template strings

const listaHtml = usuarios
.filter( u => u.edad >= 18) // primero filtramos los mayores de edad
.map( u => {
    return `<li>${u.nombre}</li>`;
}
); // el map devuelve un nuevo array

console.log(listaHtml)

// // para que nos puede servir esto?

// // para construir un elemento html

const html = `<ol>${listaHtml.join('')}</ol>`; // el join une los elementos del array en un string
console.log(html, 'es un string html a partir del map');


// sin embargo este no es el unico uso que le podemos dar al map

// podemos crear un nuevo objeto a partir de objetos ya existentes

// const mapped = usuarios.map( u => {
//     return {
//         ...u,
//         mayor: u.edad>17
//     }
// });

// console.log(mapped, 'es un array de objetos a partir del map');

