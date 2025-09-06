// mixins en clases

const Entidad = {
    save() {
        console.log('guardado en entidad');
    }
}

class User{
    constructor(name){
        this.name = name;
    }
}
Object.assign(User.prototype, Entidad);
const u = new User('Juanito');
u.save();