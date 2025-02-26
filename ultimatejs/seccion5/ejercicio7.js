// crea un algoritmo que devuelva el precio del producto mas impuesto

const precioCompleto = (precio, impuesto) => {
  return precio + (precio * impuesto);
}

let result = precioCompleto(100, 0.15);
console.log(result); // 115