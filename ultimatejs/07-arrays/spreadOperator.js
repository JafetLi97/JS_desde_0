// spread operator
// el operador spread nos permite dividir un array en partes
// y combinar arrays y objetos
// el operador spread se representa con tres puntos (...)


let arr1 = [1, 2]
let arr2 = [5, 6]

let arr3 = [0, ...arr1, 3, 4, ...arr2, 7, 8]
let arr4 = [...arr3]

arr3.pop() // elimina el último elemento del array


console.log(arr3, arr4) // [1, 2]

// Lo que hace el operador spread es copiar el contenido de arr1 a arr3
// si modificamos arr1, arr3 no se ve afectado


// El spread Operator sirve para generar copias de arrays 

