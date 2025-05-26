// Encontrar el valor absoluto en un array dado Qué va a contener números negativos
// Usar métodos de arrays


const ns = [-2, 3, 5, 15];

const absoluteValues = ns.map(num => Math.abs(num));
console.log(absoluteValues); // [2, 3, 5, 15]
// Usando el método forEach
const absoluteValues2 = [];
ns.forEach(num => {
  absoluteValues2.push(Math.abs(num));
});
console.log(absoluteValues2); // [2, 3, 5, 15]
