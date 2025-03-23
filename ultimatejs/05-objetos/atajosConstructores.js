// atajos constructores en js

let obj = {}; // es lo mismo que new Object();
let obj2 = new Object(); // es lo mismo que la linea anterior

/**
 * Tambien esta:
 * new Array(); // es lo mismo que []. lo que hace es crear un array vacio
 * new String(); // es lo mismo que ''. lo que hace es crear un string vacio
 * new Number(); // es lo mismo que 0. lo que hace es crear un numero 0
 * new Boolean(); // es lo mismo que false. lo que hace es crear un booleano false
 * new Function(); // es lo mismo que function(){}. lo que hace es crear una funcion vacia
 * new Date(); // es lo mismo que new Date(). lo que hace es crear una fecha con la fecha actual
 * new RegExp(); // es lo mismo que /(?:)/. lo que hace es crear una expresion regular vacia
 */

// que constructor  tendra un objeto que se crea con una funcion constructora?

// el constructor de un objeto creado con una funcion constructora sera la funcion constructora 
// que se utilizo para crear el objeto. Por ejemplo, si creamos un objeto con la funcion constructora 
// Usuario, el constructor de ese objeto sera la funcion Usuario. Esto nos permite saber como se creo 
// un objeto y que propiedades y metodos tiene asociados.

function Usuario(){
    this.name = 'Felipe';
}

let user = new Usuario();
console.log(user.constructor); // [Function: Usuario]


const s1 = "1+1"; 
const s2 = new String("1+1"); 
console.log(s1, s2); // 1+1 String {"1+1"}. s1 es un string y s2 es un objeto de tipo string
console.log(eval(s1), eval(s2)); // 1+1 String {"1+1"}. eval() es una funcion que evalua una expresion de js
console.log(s2.valueOf()); // 1+1. valueOf() es un metodo que devuelve el valor primitivo de un objeto


