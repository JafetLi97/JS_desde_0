function User (){
    this.name = 'Juanito';
}

function Product(){
    this.name = 'Producto 1';
}

function EntidadPadre(){

}

EntidadPadre.prototype.save = function (){
    console.log('guardado ', this.name);
}

EntidadPadre.prototype.validate = function (){
    console.log('validado ', this.name);
}

// User.prototype = EntidadPadre.prototype;
// User.prototype.constructor = User;

// User.prototype = Object.create(EntidadPadre.prototype);
// User.prototype.constructor = User;

Object.setPrototypeOf(User.prototype, EntidadPadre.prototype);

const user = new User();
console.log(user);