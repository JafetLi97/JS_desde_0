// param destructing
const config  = {
    url: 'http://ratonperes.com',
    direccion: {
        calle: 'Calle Falsa',
        numero: 123
    },
}
function webServer(config) {
    // const { url } = config; // se trduce a // const url = config.url
    const {url, ...resto} = config; // destructuring del objeto config
    console.log(resto); // { direccion: { calle: 'Calle Falsa
    return url;
}

console.log(webServer(config)); // http://ratonperes.com