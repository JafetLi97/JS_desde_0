// vaciando arrays

// existen 4 formaqs en las que podemos vaciioar un array
// 1. la forma mas rapida y sencilla es asignar un nuevo array vacio
// let array = [1, 2, 3, 4, 5]
// array = []
// console.log(array) // []

// sin embargo, esto no es lo mas recomendable, ya que si tenemos una 
// referencia a ese array, no se va a ver afectada

// ejemplo:

let array = [1, 2, 3, 4, 5];
let otraReferencia = array;

otraReferencia = [];
//console.log(array, otraReferencia); // [1, 2, 3, 4, 5]

// demuestra que la referencia no se ha modificado y sigue 
// existiendo el array original


// 2da opcion :

let array2 = [1, 2, 3, 4, 5];

array2.length = 0;
console.log(array2); // []

// 3ra opcion: metodo splice

let array3 = [1, 2, 3, 4, 5];
array3.splice(0, array3.length);
console.log(array3); // []   

// el primer argumento es el indice desde donde queremos empezar a 
// eliminar y el segundo es la cantidad de elementos a eliminar, en 
// este caso estamos eliminando desde el indice 0 hasta el final

// 4ta opcion: y l opcion menos menos recomendada es usar un loop en donde
// evaluemos el array que sea mayor a 0 con el .length y mientras la longitud
// sea mayor a 0, eliminamos el primer elemento con el metodo pop

let array4 = [1, 2, 3, 4, 5];
while (array4.length > 0) {
    array4.pop();
}
console.log(array4); // []
// esto es menos eficiente ya que estamos haciendo un loop y
// eliminando un elemento por vez, lo cual es menos eficiente que las
// otras opciones que hemos visto
// ademas de que es menos legible y menos claro
// por lo que no es recomendable usarlo
// a menos que sea necesario
// y no tengamos otra opcion
// en resumen, la mejor forma de vaciar un array es asignar un nuevo array
// vacio o usar el metodo splice
// o el metodo length
// pero no usar el loop

