const miArray = [
    "hola",
    12,
    "mundo",
    {},
    {id: 15},
    ["lala"]
]

const dividePorTipo = (array) => {
    return {
        numeros: array.filter(item => typeof item === 'number'),
        strings: array.filter(item => typeof item === 'string'),
        objetos: array.filter(item => typeof item === 'object' ),
    }
}

const nuevoArray = dividePorTipo(miArray);
console.log(nuevoArray); // [12]
