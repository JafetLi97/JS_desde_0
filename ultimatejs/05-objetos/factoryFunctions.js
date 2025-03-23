// factory functions


// son funciones que no spermiten crear objetos de manera sencilla y no repetitiva.


function crearUsuario(name, email) {
    return {
        email, // email: email. Si el nombre de la propiedad es igual al nombre de la variable, se puede omitir.
        name, // name: name. Si el nombre de la propiedad es igual al nombre de la variable, se puede omitir.
        activo: true,
        recuperarClave: function () {
            console.log('Recuperando clave...');
        }
    };
};

let user1 = crearUsuario('Felipe', 'chanchito@gmail.com');
let user2 = crearUsuario('eduardo', 'chanchi@gmail.com');

console.log(user1, user2);