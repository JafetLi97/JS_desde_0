// every and some, metiodos de array

let users = [
    {id:1, activo:true},
    {id:2, activo:true},
    {id:3, activo:true}
];

let todosActivos = users.every( u => {
    console.log('Todos activos', u.id);
    return u.activo;
    // esta funcion es un predicate, asi que se tiene que
    // devolver un booleano.

    // el metodo de every se va a detener cuando
    // encuentre un false, por lo que no va a recorrer
    // todos los elementos del array.
    // si todos son true, va a devolver true.
}); 

console.log(todosActivos);

console.log('------------------');
console.log('------------------');
console.log('------------------');
console.log('------------------');
console.log('------------------');
console.log('------------------');
console.log('------------------');

// metodo some

let algunoActivos = users.some(us => {
    console.log(us.id);
    return us.activo;
    // el metodo some se va a detener cuando
    // encuentre un true,
    // si alguno es true, va a devolver true.
    // si todos son false, va a devolver false.
});
console.log(algunoActivos);
// el metodo some es mas eficiente que el every