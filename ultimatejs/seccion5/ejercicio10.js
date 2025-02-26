// crear un array de longitud n y que sus elementos sean numeros del 1 hasta n

let longitud = 10;

function crearArray(n){
    if(n <= 0){
        return [];
    }
    let arr = [];
    for(let i = 0; i < n; i++){
        arr[i] = i + 1;
    }
    return arr;
    
}   

let arr = crearArray(longitud);
console.log(arr); // [1,2,3,4,5,6,7,8,9,10]