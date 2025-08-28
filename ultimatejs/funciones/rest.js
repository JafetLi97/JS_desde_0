const suma = (a, b, ...resto) => {
    console.log(resto);
}

suma(1, 2, 3, 4, 5, 6, 7); // [3, 4, 5, 6, 7]


// para que nos puede servir esto?

// una aplicacion de la vida real:

// si nosotrsos queresmos imprimir mensajes de error y queremos
// saber de donde vienen 

const logMsj = (desc, ...msgs) => {
    for (let msg of msgs) {
        console.log(`${desc} - ${msg}`);
    }
}

logMsj('Error de conexion', 'No se pudo conectar a la base de datos', 'Timeout excedido', 'Error de autenticacion');
 // puede ser que los menjsajes vengan de un array
const mensajes = ['No se pudo conectar a la base de datos', 'Timeout excedido', 'Error de autenticacion'];
logMsj('Error de conexion', ...mensajes); // Error de conexion - No se pudo conectar a la base de datos
// Error de conexion - Timeout excedido
// Error de conexion - Error de autenticacion    