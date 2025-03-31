// 

let objeto = {
    id: 1,            // estructura del objeto = {key: value}
    name: "chanchito",
    login: function() {},
    logout: function() {}
};

let propiedad = 'name'

const clasificarPropiedades = (objeto) => {
    const claves = Object.keys(objeto); // Solo claves propias
    return {
        propiedades: claves.filter(clave => typeof objeto[clave] !== 'function'),
        metodos: claves.filter(clave => typeof objeto[clave] === 'function')
    };
};

console.log(tienePropiedad(objeto, propiedad)); // true