// validar que no sea menor que cero y que el elemento exista en el arreglo

function getByIdx (arr, idx) {
    if (idx < 0 || idx >= arr.length) {
        return console.error('El índice no es válido');
    }
    return arr[idx];
}

let result = getByIdx([1, 2, 3,8,0,7,54,3], 5);
console.log(result); // 2