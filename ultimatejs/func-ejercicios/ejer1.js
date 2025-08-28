const obj = {
    nombre: 'Juan'
};

function Extender() {
    this.login = function() {
        console.log(`Hola ${this.nombre}, has iniciado sesión`);
    };

    this.logout = function() {
        console.log(`Adiós ${this.nombre}, has cerrado sesión`);
    };
    // Aquí puedes agregar más métodos o propiedades
    
}

Extender.call(obj); // Extender es una funcion que se ejecuta en el contexto del objeto obj

console.log(obj); 
obj.login();
obj.logout(); 