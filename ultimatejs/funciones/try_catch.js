// uso del try catch en js 

function sumarTodo(arr){
    if(!Array.isArray(arr)){
        throw new Error('El argumento debe ser un array');
    }
    return arr.reduce((acc, el) => {
        if(typeof el !== 'number' || Number.isNaN(el)) {
            throw new Error(`Todos los elementos del array deben ser numeros`);
        }
        return acc + el;
    }, 0);
}
//console.log(sumarTodo([1, 2, 3, 4])); // 10
//console.log(sumarTodo({prop: 1})); // 10

try{
    console.log(sumarTodo([1,2,3,4])); // 10
} catch(e){
    console.error( e.message);
}

// si el argumento no es un array, lanzara un error
// y el catch lo capturara, mostrando un mensaje de error

console.log('Continuamos con el resto del codigo...');

// la aplicacion no se detiene, y el codigo sigue ejecutandose
// podemos usar el try catch para manejar errores de manera controlada
// y evitar que la aplicacion se detenga por completo
// esto es especialmente util en aplicaciones grandes o en produccion
// donde queremos manejar errores de manera elegante y no interrumpir la experiencia del usuario
