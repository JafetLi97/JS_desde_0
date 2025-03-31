// ejercicio para que podamos saber como saber si un par de objetos
// son iguales

const similares = (obj1, obj2) => {
    // primero necesitamos asumir que son iguales y no va a ser hasta que 
    // revisemos los valors de los mismo que nosotros vamos a poder 
    // decir que son diferentes

    let distintos = false;

    // luego se iteraran las propiedades de los objetos
    for (let key in obj1) {
        if (obj1[key] !== obj2[key]) {
            distintos = true;
        }
    }
    return !distintos;
};

let result = similares(
  {
    id: 1,
    name: "chanchito"
  },
  {
    id: 1,
    name: 'feliz'
  }
);

console.log(result); // false