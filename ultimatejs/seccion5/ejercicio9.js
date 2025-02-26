// crear un algoritmo que devuelva un array de objetos en base a pares

let pairs = [
    [1, {name: 'Felipe'}],
    [2, {name: 'Juan'}],
    [3, {name: 'Chanchito'}]
];

function toCollections (arr) {
    let collections = [];
    for (idx in arr) {
        let elemento = arr[idx];
        collections[idx] = elemento[1];
        collections[idx].id = elemento[0];
    }
    return collections;
}

let result = toCollections(pairs);
console.log(result);