// mixins en js
// los mixins surgen como una alternativa a la herencia
// multiple, que no es soportada por JS. los mixins son
// objetos que contienen metodos que pueden ser usados
// por otras clases sin necesidad de heredar de ellos.
// los mixins son una forma de reutilizar codigo en
// diferentes clases sin necesidad de crear una jerarquia
// de herencia compleja. los mixins son una forma de
// componer clases a partir de diferentes comportamientos


function mixin(Ctr, ...args) {
    Object.assign(Ctr.prototype, ...args);
}


let vuela = {
    volar() {
        console.log(`volando`);
    }
}

let nada = {
    nadar() {
        console.log(`nadando`);
    }
}

let banio = {
    irAlBanio() {
        console.log(`yendo al banio`);
    }
}

let camina = {
    caminar() {
        console.log(`caminando`);
    }
}



// vuela, nada, camina y va al banio
function Pato() {
    this.name = 'pato';
}
mixin(Pato, vuela, nada, camina, banio);
let pato = new Pato();





// camina, nada, va al banio
function Perro(){

}
mixin(Perro, banio, nada, camina);
let d = new Perro();




//nada y va al banio
function Pez(){

}
mixin(Pez, nada, banio);

let p = new Pez();





//vuela pero no nada, no camina ni va al banio
function Avion() {
    
}
mixin(Avion, vuela);

