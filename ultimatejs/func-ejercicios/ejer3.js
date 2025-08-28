function callback(fn, ...rest){
    // fn es una funcion que recibe un numero variable de parametros
    // y los imprime por consola
    // rest es un array con los parametros que se le pasan a la funcion
    fn(...rest);
    // se usa el operador spread para pasar los parametros de rest a la funcion fn
    // de esta manera, se pueden pasar un numero variable de parametros a la funcion
    // y se imprimiran todos por consola
}



callback((...args)=>{
    console.log("Me llamaron dentro de una función flecha con estos datos:", args);
},1,2,3,4,5);

// function callback(fn, ...rest){
//     console.log("Paso 1: Entré a la función callback");
//     console.log("Paso 2: Estoy por llamar a la función que me diste (callback)");
//     fn(...rest); // llamada de vuelta
//     console.log("Paso 3: Terminé de llamar al callback");
// }

// function log(...args){
//     console.log("Me llamaron dentro de log con estos datos:", args);
// }   

// callback(log,1,2,3,4,5);

callback((...args) => {
    console.log("Me llamaron dentro de una función flecha con estos datos:", args);
}
, 6, 7, 8, 9, 10);


console.log('--------------------------------------------------');

function prepararMensaje(callback) {
    console.log("Preparando el mensaje...");
    setTimeout(() => {
        console.log("Mensaje listo.");
        callback(); // llamada de vuelta
    }, 2000);
}


// Ejecución
prepararMensaje(() => {
    console.log("¡Aquí está tu mensaje!");
});