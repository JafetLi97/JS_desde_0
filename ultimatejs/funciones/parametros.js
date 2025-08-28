// vamos a suponer ahora que necesitamos construir un objeto 
// que tiene una propiedad url bucket que es en donde quiero 
// almacenar yo los archivos de paqueteria de mi app 
// (puede ser amazon s3) y que ademas es el port 80

// function configurarAPI(url){
// const defaultURL = url || 'http://miapi.com';
//     return `${defaultURL}`
// } // esta es la vieja forma de hacerlo

function configurarAPI(url = 'http://miapi.com') {
    return `${url}`
}
//console.log(configurarAPI())
//console.log(configurarAPI('http://ratonperes.com'))


// Imaginemos que ese valor de URL está En un objeto y 
// para pasarlo Como argumento a la función tendría 
// que pasar esto: Tenemos que hacer algo llamado: 
// destructuring, que es una forma de extraer valores 
// de un objeto.

const config = {
    url: 'http://ratonperes.com',
    port: 80
}

function configurarAPI({ url } = { url: 'http://miapi.com' }) {
    // Aquí estamos utilizando destructuring para extraer la propiedad url
    // del objeto que se pasa como argumento. Si no se pasa ningún objeto,
    // se utiliza un objeto por defecto con la propiedad url definida.
    // Esto permite que la función pueda recibir un objeto con la propiedad url
    // y también proporciona un valor por defecto si no se pasa nada.
    return `${url}`
}

console.log(configurarAPI(config)) // http://ratonperes.com

// una explicación sencilla de acerca de por qué se tiene que pasar
// El objeto como argumento en este console.log es porque
// estamos utilizando destructuring para extraer la propiedad url
// de ese objeto y usarla dentro de la función configurarAPI.

// Qué pasa si no le pasamos nada al llamado de la función?
// En ese caso, la función utilizará el valor por defecto que hemos definido,
// que es 'http://miapi.com'. Esto significa que si no le pasamos un
// objeto con la propiedad url, la función devolverá ese valor por defecto.