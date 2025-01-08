// funciones 

// las funciones en JS son un tipo de dato de primera clase. esto significa que las funciones en JS se pueden asignar a variables, se pueden
// pasar como argumentos a otras funciones y se pueden devolver como valores de otras funciones. las funciones en JS son objetos especiales
// que permiten almacenar bloques de codigo que se pueden ejecutar en cualquier momento.


function saludar() {
    console.log("Hola mundo");
}

saludar(); // Hola mundo

function suma(){
    return 3 + 3;
}

//let resultado = suma();
console.log(suma()); // 6