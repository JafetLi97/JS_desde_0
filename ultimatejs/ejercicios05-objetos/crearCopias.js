console.log('crearCopias.js sin usar ... ni Object.Assing ni ninguna funcion predefinida de js' + '<br>');

let obj1 = {'name': 'Pepe', 'id': 1};

for(let llave in obj1) {
    console.log(obj1[llave]);
}

const crearCopia = (objeto) => {
    let copia = {};
    for (let key in objeto) {
        copia[key] = objeto[key];
    }
    return copia;
}

let obj2 = crearCopia(obj1);

console.log(obj1);
console.log(obj2);

// el for in es para iterar sobre las propiedades de un objeto

// el for of es para iterar sobre los valores de un objeto

