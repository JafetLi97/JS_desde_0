function Usuario(name) { // para indicar que es un constructor se pone la primera letra en mayuscula
//this es el objeto que se esta creando
//generar el id con math.random
this.name = name;
this.id = Math.random();
}

let user1 = new Usuario('Pepe');
let user2 = new Usuario('Juan');

console.log(user1, user2);

