function Entidad(entidad){
    this.id = Math.random().toString(20);
    this.entidad = entidad;
}

function User(){
    Entidad.call(this, 'user'); // copia los atributos de Entidad en this
    this.attrs = {
        nombre: 'chanchito feliz',
        email: 'chanchito@feliz.com'
    }
}

const u = new User(); // aca se crea un objeto vacio y 
// se le asigna el prototipo de User.prototype
console.log(u);