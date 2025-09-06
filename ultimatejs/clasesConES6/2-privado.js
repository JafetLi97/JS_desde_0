// function User(a){
//     let name = a; // privado
//     this.getName = function (){
//         return name;
//     }
// }

class User {
    #name; // privado
    constructor(name){
        this.#name = name;
    }
    getName(){
        return this.#name;
    }
}

const u = new User('Juanito');
console.log