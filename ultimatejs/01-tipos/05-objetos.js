// objetos eb JS

// los objetos en JS son un tipo de dato de referencia. los objetos en JS son un conjunto de propiedades y metodos. las propiedades son
// variables que se encuentran dentro del objeto y los metodos son funciones que se encuentran dentro del objeto.

// los objetos en JS se pueden crear de varias formas. la forma mas comun de crear un objeto en JS es utilizando la notacion de llaves
// {}. esta notacion se utiliza para crear objetos literales. un objeto literal es un objeto que se crea en tiempo de ejecucion y no
// se crea a partir de una clase.

// un objeto literal es un objeto que se crea en tiempo de ejecucion y no se crea a partir de una clase. un objeto literal es un objeto
// que se crea utilizando la notacion de llaves {}.

// personaje de tv 

let nombre = "Peter Parker";
let profesion = "Photographer";
let edad = 17;

//definiendo un objeto llamado personaje

let personaje = {
    nombre: "Peter Parker",   // par llave-valor
    profesion: "Photographer",
    edad: 17
}

console.log(personaje);
console.log(personaje.edad); // 17
console.log(personaje["profesion"]); // Photographer
 
personaje.edad = 18;

personaje["profesion"] = "Superhero";


// para borra una prop[iedad]

delete personaje.edad;

console.log(personaje);