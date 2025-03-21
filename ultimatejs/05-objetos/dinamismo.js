// dinamismo en js

// que es el dinamismo en js explicado de manera sencilla?

// El dinamismo en js es la capacidad de los objetos de cambiar en tiempo de ejecucion, es decir, 
// podemos agregar, modificar o eliminar propiedades y metodos de un objeto en cualquier momento.
console.log('El script se ha cargado correctamente.');

const user = {
    id: 1
};
 
// Agregar propiedades

user.name = 'Felipe';

user.guardar = function () { 
    console.log('Guardando...', user.name);
}

user.guardar();

//delete 

delete user.name;
delete user.guardar;

console.log(user);

// para que sirve el dinamismo en js?

// El dinamismo en js es una de las caracteristicas mas poderosas de este lenguaje, ya
//  que nos permite adaptar nuestros objetos a las necesidades de nuestro programa en tiempo 
// de ejecucion. Por ejemplo, podemos agregar propiedades y metodos a un objeto en tiempo de ejecucion
//  para que se comporte de una manera diferente en un momento determinado. Tambien podemos eliminar
//  propiedades y metodos que ya no necesitamos, lo que nos permite reducir el uso de memoria y mejorar
//  el rendimiento de nuestra aplicacion. En resumen, el dinamismo en js nos permite crear objetos  que
//  son mas flexibles y adaptables a los cambios en nuestro programa.

// para que sirve el object.freeze en js?

// El metodo Object.freeze en js se utiliza para hacer que un objeto sea inmutable, es decir, 
// que no se puedan agregar, modificar o eliminar propiedades y metodos de un objeto una vez que
//  ha sido congelado. Esto nos permite proteger nuestros objetos de cambios no deseados y garantizar
//  que su estado no cambie en tiempo de ejecucion. El metodo Object.freeze es util cuando queremos
//  crear objetos que sean constantes y no cambien a lo largo de la ejecucion de nuestro programa.

// ejemplo de object.freeze en js

const user1 = Object.freeze({
    id: 2
});
user1.name = 'Felipe';
user1.id = 3;
console.log(user1);

// si quisiera,mos cambiarle el valor a las proppiedades que ya tiene un objeto pero que aun asi no deje 
// que se le agreguen mas propiedades, se usa el metodo Object.seal

console.log('El script se ha cargado correctamente.');

const user2 = Object.seal({
    id: 3
});

// Intentamos modificar una propiedad existente
user2.id = 4;

// Confirmamos que se puede modificar con un console.log
console.log('Antes de imprimir user2');
console.log(user2);  // 🔹 Debería imprimir: { id: 4 }
