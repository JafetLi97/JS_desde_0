// declaracion vs expresion de funciones en js 

// declaracion de funcion

// para declarar una funcion se usa la palabra reservada function, seguida del nombre de
// la funcion, paréntesis y llaves. Por ejemplo:

//funcion nombrada  -> named function
function miFuncion() {
    console.log("Esta es una declaración de función");
}


// tambien existen las funciones anónimas, que son aquellas que no tienen un nombre
// funcion anonima -> anonymous function
// function() {
//     console.log("Esta es una función anónima");
// }

// se suele usan en cosas como map por ejemplo

[].map(function(item) {
    console.log(item);
}
);



// expresion de funcion -> function expression

let resta = function(){  // anonymous function expression
    console.log("restando");
}

let multi = function multip(){  // named function expression
    console.log("multiplicando");
}

const divide = () => {  // arrow function expression || siempre sera una funcion anonima
    console.log("dividiendo");
}