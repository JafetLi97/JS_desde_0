// class Restaurants {
//   #timetable;
//   constructor(name) {
//     this.name = name;
//   }

//   // Getter. con get obtenemos el valor de una propiedad. 
//   // los getters no reciben parametros
//   get timetable() {
//     return this.#timetable;
//   }

//   // Setter. con set modificamos el valor de una propiedad
//   // los setters reciben un parametro
//   set timetable(value) {
//     let date = new Date(value)
//     let time = date.getTime();
//     if(Number.isNaN(time)){
//       throw new Error('invalid date');
//     }
//     this.#timetable = date;
//   }
// }

// const r = new Restaurants("Pizzeria");

// r.timetable = '1 Apr 1923'; // setter
// console.log(r.timetable); // getter


// Genial, hagámoslo 👌.
// Te propongo este mini ejercicio:

// Ejercicio
// Crea una clase Rectangulo que:
// Tenga propiedades privadas #ancho y #alto.

// Use un setter para asegurarse de que ancho y alto 
// sean siempre mayores que 0 (si no, que lance un error).
// Tenga un getter que devuelva el área (ancho * alto).
// 👉 Tu reto: escribe el código de la clase Rectangulo, 
// crea una instancia con ancho = 10 y alto = 5, y luego 
// prueba a imprimir el área.
// Cuando lo tengas, me lo muestras y lo revisamos juntos.

class Rectangulo {
    #ancho;
    #alto;

    constructor(ancho, alto){
        this.#ancho = ancho;
        this.#alto = alto;
    }

    get ancho(){
        return this.#ancho;
    }

    set ancho(value){
        if(value <= 0){
            throw new Error('El ancho debe ser mayor que 0');
        }
        if(typeof value !== 'number'){
            throw new Error('El ancho debe ser un numero');
        }
        this.#ancho = value;
    }

    get alto(){
        return this.#alto;
    }
    set alto(value){
        if(value <= 0){
            throw new Error('El alto debe ser mayor que 0');
        }
        if(typeof value !== 'number'){
            throw new Error('El alto debe ser un numero');
        }
        this.#alto = value;
    }
    get area(){
        return this.#ancho * this.#alto;
    }
    // set area(value){
    //     throw new Error('El area no se puede modificar directamente');
    // }

}

const a = new Rectangulo(10,5);

console.log(a.area); // 50
