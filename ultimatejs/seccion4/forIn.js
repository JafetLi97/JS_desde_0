// for in

// sirve para iterar las propiedades de un objeto

let user = {
    id:1,
    name: 'Ryan',
    lastname: 'Ray',
    age: 30,
    height: 1.80,
    weight: 80
};

for (let key in user) {
    console.log(key, user[key]);
}

// usando for in para iterar arreglos

let animales = ["perro", "gato", "loro", "pez", "serpiente", "chanchito"];

for (let index in animales) {
    console.log(index, animales[index]);
}