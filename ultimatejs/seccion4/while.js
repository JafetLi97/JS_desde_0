// ciclos while

// cuando usar los ciclos while? cuando no sabemos cuantas veces se va a repetir el ciclo

// ejemplo 1

// let contador = 0;

// while (contador < 10) {
//     console.log(contador);
//     contador++;
// }

let i = 0;

// while (i < 10) {
//   console.log(i);
//   i++;
// }

// console.log(
//   "Fin del ciclo while. (este mensaje se imprime una vez que el ciclo while termina)"
// );

while (i <= 10) {
  if (i % 2 === 0) {
    console.log("numero par : ", i);
  }
    i++;
}
