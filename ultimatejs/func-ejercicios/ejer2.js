const obj = {
    nombre: 'Juan'
};

function extender(usuario){
    usuario.login = function() {
        console.log(`Hola ${this.nombre}, has iniciado sesión`);
    };

    // aqui en este ejercicio  no hay logout

    return usuario;
}

const usuario = extender(obj); // Extender es una funcion que se 
// ejecuta en el contexto del objeto obj

console.log(obj); 
obj.login();
