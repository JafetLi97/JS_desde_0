const usuario = {
    nombre: 'Jafeth',
    ciudadanias: ['honduras', 'estados unidos', 'canada'],
    mostrarCiudadanias() {
        this.ciudadanias.forEach( (ciudadania) => { // tiene que ser una funcion flecha para que this haga referencia al objeto usuario, con las funciones normales, this haria referencia al objeto global window
            console.log(this.nombre, ciudadania);
        })
        // this hace referencia al objeto usuario
        // y podemos acceder a sus propiedades y metodos
        // si this no estuviera definido, no podriamos acceder a las propiedades
        // y metodos del objeto usuario
        // y tendriamos un error de referencia
        // ReferenceError: this is not defined
        
    }
}
usuario.mostrarCiudadanias(); // ['honduras', 'estados unidos', 'canada']