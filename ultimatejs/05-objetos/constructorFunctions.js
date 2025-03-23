// constructor functions
// {id:1, recuperarClave: function(){}}
function Usuario(){
    this.id =1;
    this.recuperarClave = function(){ // cuando se crea una funcion dentro de un objeto se le llama metodo
        console.log('Recuperando clave...');
    };
};

let usuario = new Usuario(); // new es una palabra reservada de js que se usa para crear un nuevo objeto a partir de una funcion constructora
console.log(usuario);