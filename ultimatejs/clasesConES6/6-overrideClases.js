class Entidad {

    constructor(id){
        this.id = id;
        this.createdAt = new Date();
    }

    save(){
         console.log('guardado en entidad... desde entidad');
    }
}

class User extends Entidad {
    constructor(name){
        super(1);
        this.name = name;
    }

    save(){
        super.save();
        console.log('guardado en user... desde user');
    }
}

const u = new User('Juanito');