//aprendiendo los 4 pilares de la POO en JavaScript

// Encapsulacion

// const user = {
//     name: 'John',
//     surnames: 'Doe',
//     getNombreCompleto() {
//         return [this.name, this.surnames].join(' ');
//     }
// }

// console.log(user.getNombreCompleto()); // John Doe


// abstraction

// const user = new User();

// user.password = 'chanchito123';
// user.Save();






// herencia

// User --->  id , nombre guardar()
// Restaurante ---> id , nombre, guardar()
// Motociclista ---> id , nombre, guardar()


// en lugar de poner cada atributo y metodo en cada clase, se puede 
// crear una clase base que contenga los atributos y metodos comunes,
// o clase madre padre lo que sea, que guarde estos atributos y metodos
// y las clases hijas heredan de esta clase base








// Polimorfismo

// function validarEntidad(entidad)

// function ordenarNums(fn, ...args){
//     if (args.length === 0) {
//         console.log('No hay numeros para ordenar');
//         return;
//     }

//     const ordenados = args.sort((a, b) => a - b);
    
//     if (typeof fn === 'function') {
//         fn(ordenados);
//     } else {
//         console.log('No se proporcionó una función de callback válida');
//     }
// }

// ordenarNums((numerosOrdenados) => {
//     console.log('Callback:', numerosOrdenados);
// }, 4, 5, 7, 1, 2, 3);
// ordenarNums(4, 5, 7, 1, 2, 3); // No se proporcionó una función de callback válida
// ordenarNums(); // No hay numeros para ordenar
// Prototipos en JS


