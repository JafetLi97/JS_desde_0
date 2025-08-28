// geters y setters

const persona = {
    nombre: 'chanchito',
    appellido: 'feliz',
    get nombreCompleto() {
        // este es un metodo que nos permite acceder a las propiedades
        // de manera mas sencilla
        return `${this.nombre} ${this.appellido}`;
    },
    set nombreCompleto(valor) {
        const [nombre, apellido] = valor.split(' ');    
        this.nombre = nombre;
        this.appellido = apellido;

    }
}
persona.nombreCompleto = 'pipe'
console.log(persona.nombreCompleto); // pipe bueno

// si nosotros quisieramos ver el nombre completo de la
// persona deberiamos acceder a las propiedades de manera
// individual y concatenarlas

// ejemplo 

// console.log(`${persona.nombre} ${persona.appellido}`); // chanchito feliz


// hay otra alternativa y es crear un metodo dentro del objeto
// que nos permita acceder a esa propiedad de manera mas sencilla

//(vease bajo la propiedad de apellido)