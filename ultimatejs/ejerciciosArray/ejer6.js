// Dividir el arreglo 'miArray' Por tipo, Utilizando el método reduce
// Y también Type of. El resultado debe ser un arreglo en donde la llave tiene que llamarse según el tipo de dato,
// Y el valor tiene que ser Una especie de lista de cada cosa que hay según su tipo de dato
// por ejemplo : boolean: [true, false], string: ['hola', 'mundo'], number: [12, 15], object: [{}, {id: 15}, ['lala']]


const miArray = [
    "hola",
    12,
    true,
    "mundo",
    {},
    {id: 15},
    ["lala"]
]
const dividePorTipo = (array) => {
    return array.reduce((acc, item) => {
        const tipo = typeof item;
        
        acc[tipo] = acc[tipo] ? acc[tipo] : [];
        acc[tipo].push(item);
        return acc;
    }, {});
}
const nuevoArray = dividePorTipo(miArray);
console.log(nuevoArray); // {string: ['hola', 'mundo'], number: [12], boolean: [true], object: [{}, {id: 15}, ['lala']]}