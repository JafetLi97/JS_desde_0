// shor circuit

// valores que evaluan a false

// false
// null
// 0
 // ''
// NaN
// undefined

let nombre = 'Chanchito feliz';

let userName = nombre || 'Desconocido'; 

console.log(userName);

function fn1 () {
    console.log(' soy funcion uno');

    return false;

}


function fn2 () {
    console.log('soy funcion dos');

    return true;
}

let x = fn1() && fn2();
