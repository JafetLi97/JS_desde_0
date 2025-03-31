// cuales son metodos

let objeto = {
    id: 1,
    name: "chanchito",
    login: function() {},
    logout: function() {}
};

const cualesSonMetodos = (objeto) => {
    for (let key in objeto) {
        if (typeof objeto[key] === 'function') { // objeto[key] es 
        // como que ahi este puesto cada cosa que se esta iterando, en este 
        // caso es el objeto 'objeto' y primero va la propiedad 'id', 
        // luego va 'name', luego 'login' y luego 'logout'. el if esta
        // preguntando si el tipo de dato de lo que se esta iterando es
        // una funcion, si es asi, se imprime en consola el nombre de la
        // propiedad que es una funcion.
            console.log(key);
        }
    }
};

cualesSonMetodos(objeto);