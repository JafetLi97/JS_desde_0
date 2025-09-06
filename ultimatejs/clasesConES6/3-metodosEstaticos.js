// metodos estaticos. habran situaciones en donde no va a 
// hacer sentido que nosotros agreguemos metodos o propiedades
// a una clase misma.

class Restaurante{
    constructor(name){
        this.name = name;
    }

    getTimetable(){
        console.log(`10:00 - 22:00`);
    }

    static getRestaurant(id){
        return new Restaurante('BBQ');
    }
}

const r =  Restaurante.getRestaurant(12);

// un metodo estatico es un metodo que no pertenece a la
// instancia de la clase, sino a la clase misma. es decir
// que no necesito crear una instancia de la clase para
// poder usar el metodo estatico. los metodos estaticos
// se usan para crear metodos que no necesitan acceder a
// los atributos o metodos de la instancia de la clase,
// sino que son metodos que pertenecen a la clase misma.
// los metodos estaticos se definen con la palabra
// reservada static.

