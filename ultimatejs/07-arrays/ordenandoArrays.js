// ordenando arrays

// teniendo una array de numeros desordenados por 
// ejemplo, se pueden ordenar con el método sort

let array1 = [5, 3, 8, 1, 4, 2, 7, 6, -3, -1, 0];

// el método sort ordena los elementos de un array

array1.sort(); // ordena el array de menor a mayor

console.log('usando metodo sort',array1); // [-3, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8]
// el método sort modifica el array original
// el método sort ordena los elementos de un array de 
// menor a mayor

// para ordenarlos de mayor a menor, se puede usar el 
// método reverse 

array1.reverse(); // ordena el array de mayor a menor
console.log('usando metodo reverse',array1); // [8, 7, 6, 5, 4, 3, 2, 1, 0, -1, -3]


// el método reverse modifica el array original


// Estos mismos métodos pueden servir para cuando 
// estamos trabajando con elementos por ejemplo de la a a la z
// o de la z a la a

let letras = ['z', 'a', 'b']

letras.sort(); // ordena el array de menor a mayor
console.log('usando metodo sort',letras); // ['a', 'b', 'z']

letras.reverse(); // ordena el array de mayor a menor
console.log('usando metodo reverse',letras); // ['z', 'b', 'a']

// Cuando estamos trabajando con strings en general,
// Sucede un problema con estos métodos

// ya que el método sort y reverse no funcionan como
// esperábamos


let letras2 = ['Z', 'a', 'b', 'c', 'e'];
letras2.sort(); // ordena el array de menor a mayor
console.log('usando metodo sort',letras2); // ['A', 'B', 'a', 'b', 'z']

// Esto tiene que ver con temas de los códigos ASCII
// para repararlo hay que pasarle un argumento al método sort();

// el argumento es una función que recibe dos parámetros
// y devuelve un valor numérico
// si el valor es negativo, el primer elemento se queda
// si el valor es positivo, el segundo elemento se queda
// si el valor es cero, no se hace nada
// el método sort() recibe una función de comparación
// que recibe dos parámetros y devuelve un valor numérico
// el valor numérico indica si el primer elemento es mayor, menor o igual que el segundo
// el método sort() ordena los elementos de un array
// de menor a mayor
// el método sort() modifica el array original


letras2.sort((a, b) => {
    /**
     * si es que quieres que a antes que b => -1
     * si es que quieres que b antes que a => 1
     * si es que quieres que a y b sean iguales => 0
     */

    let atolower = a.toLowerCase(); // Da igual si todas se convierten o a mayúsculas o a minúsculas, Lo que sí tiene que haber es que todas estén o mayúsculas o minúsculas
    let btolower = b.toLowerCase();

    if (atolower < btolower) {
        return -1; // a antes que b
    }
    if (atolower > btolower) {
        return 1; // b antes que a
    }
    return 0; // a y b son iguales

});

console.log('usando metodo sort y la funcion como argumento',letras2); // ['a', 'b', 'c', 'e', 'Z']
// el método sort() modifica el array original


// Aunque para simplificar ese if, Se podría usar
// El método localeCompare
// el método localeCompare() compara dos cadenas de texto
// y devuelve un valor numérico
// el valor numérico indica si la primera cadena es mayor, menor o igual que la segunda
// el método localeCompare() es más eficiente que el método sort()

letras2.sort((a, b) => a.localeCompare(b)); // ordena el array de menor a mayor
console.log('usando metodo sort y la funcion como argumento',letras2); // ['a', 'b', 'c', 'e', 'Z']
// el método sort() modifica el array original


// esto mismo lo podemos usar nosotros cuando estemos trabajando con objetos


console.log('----------------------------------');
// ordenando objetos

let personas = [
    {edad: 20, nombre: 'felipe'},
    {edad: 15, nombre: 'chanchito'},
    {edad: 1, nombre: 'zazaza'},
];

personas.sort((a, b) => {
    if (a.edad < b.edad) return -1; // a antes que b
    if (a.edad > b.edad) return 1; // b antes que a
    return 0; // a y b son iguales
}
);

console.log('usando metodo sort y la funcion como argumento',personas); // [{edad: 15, nombre: 'chanchito'}, {edad: 20, nombre: 'felipe'}, {edad: 25, nombre: 'feliz'}]
// el método sort() modifica el array original