function Entidad(){}

Entidad.prototype.save = function (){
    console.log('guardado... desde entidad');
}

function User() {}

User.prototype.save = function (){
    console.log('guardado... desde user');
}


Object.setPrototypeOf(User.prototype, Entidad.prototype);

const u = new User();


/// 