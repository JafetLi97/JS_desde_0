// date 

const ahora = new Date();
//console.log(ahora);

const fecha = new Date('December 12 1986 14:00 GMT-0300'); // MM-DD-YYYY
// console.log(fecha);

const fecha2 = new Date(1986, 11, 12, 14, 0); // en lugar de pasar como
const fecha3 = new Date(1986, 11, 12, 14+15, 0); // en lugar de pasar como
// string, se pasa como argumentos // anio/mes/dia/hora/minutos/segundos/milisegundos
// console.log(fecha2);
// console.log(fecha3);


// fechas de en un formato internacional


console.log(fecha3.toISOString()); // 1986-12-12T19:00:00.000Z // ideal para mostrarselo al cliente

console.log(fecha3.toDateString()); // Fri Dec 12 1986. // ideal para mandar al servidor

console.log(fecha3.toTimeString()); // 19:00:00 GMT-0300 (hora de verano de Chile).  // para ver horas


// metodos get 

console.log(fecha3.getDate()); // 12

// hay diferentes metodos get para obtener el anio, mes, dia, hora, minutos, segundos, milisegundos

// metodos set
// sirven para modificar las fechas

console.log(fecha3.setFullYear(2021)); // 1639290000000 // retorna la fecha en milisegundos
console.log(fecha3); // 2021-12-12T19:00:00.000Z