// crear un algoritmo que devuelva la cantidad de numeros positivos en un array

let array = [1, 2, 3, 4, 5, -1, -2, -3, -4, -5, 8];

const cuantosPositivos = (array) => {
  let positivos = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      positivos++;
    }
  }
  return positivos;
}

console.log(cuantosPositivos(array));
