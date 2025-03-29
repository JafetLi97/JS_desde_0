// Objetos privados vs públicos


function Usuario(){

    let id = 1; // esto es privado
    this.name = 'Felipe';

    let log = function(){ // esto es privado
        console.log("logging...");
    }
    this.guaradar = function(){
        log();
        console.log('Guardando...');
    }
}

const usuario = new Usuario();
console.log(usuario);

// podria pasar que alguien que use mi objeto usuario, pueda cambiar el nombre de usuario por ejemplo o 
// podria cambiar el metodo de log para que diga ora cosa, ejemplo:
// usuario.name = 'Chanchito';
// usuario.log = function(){
//     console.log('Hackeado');
// }
//console.log(usuario); // el nombre de usuario fue cambiado a Chanchito y el metodo log fue cambiado 
// a Hackeado

// que es lo que podemos hacer entonces para evitar que alguien pueda cambiar las propiedades de
// nuestro objeto?

usuario.guaradar(); // esto no se ejecuta porque log es privado