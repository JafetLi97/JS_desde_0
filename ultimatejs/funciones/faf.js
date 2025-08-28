// LAS FAT ARROW FUNCTIONS NO TIENEN ARGUMENTS // (no se 
// refiere a los argumentos si no a la palabra reservada 
// arguments)
// NO TIENEN SUPER NI TAMPOCO NO TIENEN THIS


const suma = (a, b) => {
  return Array.from(arguments)
    .reduce((acc, el) => acc + el);

  // let total = 0;
  // for (let valor of arguments) {
  //   total += valor;
  // }
  // return total;
};

console.log(suma(1, 2, 3, 4)); // 10
