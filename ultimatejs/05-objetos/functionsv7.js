// functions

function Punto(x,y){
    this.x = x;
    this.y = y;
    this.dibjar = function(){
        console.log('Dibujando...');
    }
}


// como hacer esto mismo pero utilizando el constructor de Function con F mayuscula

// const Point = new Function('x','y',`
// this.x = x;
// this.y = y;
// this.dibujar = function(){
//     console.log('Dibujando...');
// }
// `);

// const p = new Point(1,2);
// console.log(p);

// eso de ahi arriba nunca usarlo, es solo para demostrar que se puede hacer lo mismo con el 
// constructor de Function

// metodo call que tienen todas las funciones en js

// Punto.call({},1,2); // el primer argumento es el this, el segundo es el primer argumento de la 
// funcion

let punto = {z:7};
//Punto.call(punto,1,2);
Punto.apply(punto,[1,2]);
console.log(punto);

// apply es lo mismo que call pero en vez de pasar los argumentos separados por coma, se pasan en un
// array

// apply y call nos permiten extender objetos que hayamos definido anteriormente.



