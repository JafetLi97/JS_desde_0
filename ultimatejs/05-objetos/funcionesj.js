// funciones en js

// las funciones en js son objetos de primera clase, eso quiere decir que tienen propiedades. 
// Se pueden asignar a variables, pasar como argumentos, 
// retornar de otras funciones y almacenar en objetos

function Usuario(nombre){
    this.nombre = nombre;
}

console.log(Usuario.name); // retorna el nombre de la funcion
console.log(Usuario.length); // retorna el numero de argumentos que recibe la funcion




// podemos asignar funciones a variables
const U = Usuario

let user = new U('Felipe');

console.log(user);









// podemos pasar funciones como argumentos

function of(Fn, arg){
    return new Fn(arg); // porqué el new? porque estamos creando un nuevo objeto
}   

let user1 = of(Usuario, 'Chanchito');
console.log(user1);









// podemos retornar funciones de otras funciones

function returned()
{
    return function(){
        console.log('Me ejecutaron');
    }
}

let regreso = returned();
regreso();










// podemos almacenar funciones en objetos

let obj = {
    nombre: 'Felipe',
    hablar: function(){
        return 'Hola';
    }
}

console.log(obj.hablar());  // Esto ahora imprimirá: Hola