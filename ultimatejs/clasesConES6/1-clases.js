// function User(name){
//     this.name = name;
//     this.instancia = function() {};
// } // esto hace parte del objeto que nosotros vamos a crear 
// // con la palabra reservada new


// User.prototype.login = function (){
//     console.log('logueado');
// };

// como podriamos hacer eso mismo usando la palabra
// reservada class de ES6?

class User {
    constructor(name){
        this.name = name;
        this.instancia = function() {};
    }

    activo = true;

    logout = () => { // con igual se asigna al objeto literal cread
        // sin igual se asigna al prototipo
        console.log('deslogueado');
    }
    login(){
        console.log('logueado');
    }   

}

const u = new User('Juanito'); // las clases no se hoistean,
//  si intento hacer esto al inicio me arrojara error, cosa que
// no pasa con los constructores. Hay que recordar que las
// clases son azucar sintactico sobre los prototipos.
console.log(Date.now()); 