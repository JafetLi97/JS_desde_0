// ejemplo de continue y break

// ejemplo de como funciona continue

let i =0;

// while (i < 10) {
  
//     i++;
//     if (i === 5) {
//         continue;
//     }

//     console.log(i);
// }

// el continue es como si estuviese preguntando: "i es igual a 5? entonces no le pares bola, 
// ignora eso y pasa al siguiente ciclo"

while (i < 10) {
  
    i++;
    if (i === 4) {
        break;
    }

    console.log(i);
}

// el break es tipo: "si ves ese numero ahi, es decir, si en algun momento i es igual a 4, se 
// termina todo y ya no hay mas ciclos "