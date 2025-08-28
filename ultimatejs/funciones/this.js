// this en js

// this hace referencia a un objeto pero ¿a cual? pues al 
// objeto que lo contiene, es decir, al contexto en el que 
// se ejecuta 

// pero si this no ne encuentra en un contexto de objeto si no 
// en una funcion, entonces this hace referencia al objeto
// window, es decir, al objeto global

// new hace referencia al objeto que sera creado por la funcion
// constructora, es decir, al objeto que se esta creando

// en resumen, en un objeto: 
// this hace referencia al objeto que lo contiene
// en una funcion:
// this hace referencia al objeto global (window)
// si se usa new:
// this hace referencia al objeto que se esta creando



// // primer ejemplo. caso: cuando this hace r ghjk0-\iu76y54321`eferencia al objeto que lo contiene
// // en este caso, this hace referencia al objeto persona
// // y podemos acceder a sus propiedades y metodos

// const persona = {
//     nombre: 'chanchito',
//     login() {
//         console.log(this)
//     }
// }

// persona.logout = function logout() {
//     console.log(this);
// }
// persona.logout(); // { nombre: 'chanchito', login: [Function: login], logout: [Function: logout] }

// segundo ejemplo. caso: cuando this Se encuentra dentro de 
// una función - hace referencia al objeto global
// en este caso, this hace referencia al objeto window
// y podemos acceder a sus propiedades y metodos

// function log(){
//     console.log(this);
// }
// log(); // Window { ... } - en un navegador


function Log(mensaje){
    this.mensaje = mensaje;
    console.log(this);
}

const l = new Log('hola'); 

// cuando usamos la palabra reservada de new, pasan 4 cosas:
// 1. Se crea un nuevo objeto literal vacio
// 2. Se vincula este objeto a this
// 3. Se vincula el prototipo
// 4. Si no retorna nada, entonces retorna this