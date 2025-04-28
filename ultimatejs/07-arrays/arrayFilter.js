// filter: array -> Sirve para filtrar arrays y asi poder eliminar objetos o datos que no necesitamos
// // devuelve un nuevo array con los elementos que 
// cumplen la condicion
// // el array original no se modifica
// // el array devuelto puede ser de diferente tamaño
// // el array devuelto puede ser vacio
// // el array devuelto puede ser igual al original
// // el array devuelto puede ser un array de objetos
// // el array devuelto puede ser un array de strings
// // el array devuelto puede ser un array de numeros
// // el array devuelto puede ser un array de booleanos
// // el array devuelto puede ser un array de cualquier tipo



let users = [
    {edad:17, nombre:'Juan'},
    {edad:13, nombre:'Pedro'},
    {edad:25, nombre:'Maria'},
    {edad:32, nombre:'Jose'},
]; 

// imaginemonos que de este listado de usuarios nosotros
// queremos filtrar a los que son mayores de edad porque,
// por ejemplo queremos desplegar un anuncio qie solo
//es para mayores de edad. 

const mayoresDeEdad = users.filter( u => {
    
    return u.edad >= 18;
}
); // el filter devuelve un nuevo array
console.log(mayoresDeEdad);
// el array original no se modifica
 
