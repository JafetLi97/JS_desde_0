// clonando objetos en js

let punto = {
    x: 10,
    y: 20,
};

// queremos clonar este objeto dentro de otro objeto

// vamos a usar el metodo assign de Object



Object.assign(punto, {z : 20}); 

//console.log(punto);

// entonces como podemos usar este metodo para clonar un objeto?

let punto2 = Object.assign({}, punto, {z:20}); // el primer argumento es el objeto al que se le va 
// a asignar las propiedades, el segundo argumento es el objeto que se va a clonar
//console.log(punto2);


let referencia = Object.assign({}, punto, {z:20, x: 1}); 
//console.log(referencia);

// como podemos hacer una copia exacta de un objeto?


// es sencillamente pasarle 2 argumentos iguales a Object.assign que es un objeto vacio y el objeto
// que queremos clonar
let copiaPunto = Object.assign({}, punto);
// console.log(copiaPunto, punto);


// si modificamos la copia, no se modifica el original

//sread operator

let copia3 = {...punto}; // se puede traducir como : "tomar todas las propiedades de punto y ponerlas
// en un nuevo objeto"
//console.log(copia3);



