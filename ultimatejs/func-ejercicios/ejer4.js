function suma(fn, ...rest){
    // fn es una función que recibe un número variable de parámetros
    // y los suma
    // rest es un array con los parámetros que se le pasan a la función
    console.log('rest:', rest);
    const resultado = rest.reduce((acc, num) => acc + num, 0);
    fn(resultado);
    // se usa el operador reduce para sumar todos los números en rest
    // y luego se llama a la función fn con el resultado de la suma
}

suma((resultado) => {
    console.log("El resultado de la suma es:", resultado);
}, 1,2,3,4)