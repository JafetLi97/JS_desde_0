let afuera = "variable global";



function alcance() {
    
    afuera = "variable modificada dentro de la funcion";
    function saludo() {}
    var vieja = "ya no se debe usar esto";
    let variable = "hola mundo";
    const constante = "holamundo";
    
}
// console.log(saludo); // function saludo() {}
// console.log(vieja); // ya no se debe usar esto
// console.log(variable); // hola mundo
// console.log(constante); // holamundo


console.log(afuera); // variable global

alcance();

console.log(afuera); // variable global




console.log('----------------------------------------------');


function alcance2() {
  
}
let greeting = "Hola desde alcance2";
console.log(greeting); // undefined, porque greeting no es accesible fuera de la funcion alcance2