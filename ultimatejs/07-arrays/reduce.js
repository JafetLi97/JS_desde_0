// reducce metodo
// reduce es un metodo de los arrays que permite transformar un array en un solo valor
// reduce recibe una funcion que recibe dos argumentos, el acumulador y el elemento actual
// el acumulador es el valor que se va acumulando en cada iteracion
// el elemento actual es el valor del elemento que se esta iterando

const numeros = [1, 2, 3, 4];


const suma = numeros.reduce((acumulador, elementoActual) => {
    console.log(acumulador, elementoActual);
    return acumulador + elementoActual;
}, 0);

console.log(suma); // 10
// el segundo argumento de reduce es el valor inicial del acumulador
// si no se le pasa, el primer elemento del array se usa como valor inicial
// y el segundo elemento como elemento actual


// sirve tambien para aplanar arrays

const anidado = [[1,2],3,[4,5]]; // lo que queremos que salga  es [1,2,3,4,5]
const aplanado = anidado.reduce((acumulador, elementoActual) => {
    return acumulador.concat(elementoActual);
}, []); // el segundo argumento es el valor inicial del acumulador
console.log(aplanado); // [1,2,3,4,5]


// otro ejemplo de uso 

const personas = [
    { nombre: 'Juan', edad: 20 },
    { nombre: 'Pedro', edad: 30 },
    { nombre: 'Maria', edad: 25 }
];

const indexado = personas.reduce((acumulador, elementoActual) => ({
    ...acumulador,
    [elementoActual.nombre]: elementoActual,
})
, {}); // el segundo argumento es el valor inicial del acumulador
console.log(indexado); // { Juan: { nombre: 'Juan', edad: 20 }, Pedro: { nombre: 'Pedro', edad: 30 }, Maria: { nombre: 'Maria', edad: 25 } }

