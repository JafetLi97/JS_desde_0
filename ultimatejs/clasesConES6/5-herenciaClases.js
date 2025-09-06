class Entidad {

    constructor(id){
        this.id = id;
        this.createdAt = new Date();
    }

    save(){
       
    }
}

class User extends Entidad {
    constructor(name){
        super(1);
        this.name = name;
    }
}

const u = new User('Juanito');