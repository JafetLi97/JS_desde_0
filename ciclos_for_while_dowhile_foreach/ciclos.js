// Ahora vamos a aprender sobre los ciclos. Los ciclos son estructuras de control que nos permiten repetir 
// un bloque de código varias veces. En JavaScript tenemos varios tipos de ciclos, los más comunes son: for, while, do while y foreach. 
// Vamos a ver cómo funcionan cada uno de ellos.

// Ciclo for
// El ciclo for es uno de los más utilizados en JavaScript. Se compone de tres partes: la inicialización, la condición y el incremento.
// La inicialización se ejecuta una sola vez al principio del ciclo. La condición se evalúa antes de cada iteración y si es verdadera, 
// el ciclo se ejecuta. El incremento se ejecuta al final de cada iteración. Este ciclo se ejecutará el número de veces que se ha establecido. Veamos un ejemplo:

// tablas de multiplicar hasta el x12 dado un numero del usuario 

// let numero = parseInt(prompt("Ingrese un número para ver su tabla de multiplicar"));

// if(isNaN(numero)){
//     console.log("No ingresaste un número");
// }else{
//     for(let i =0; i<=12; i++){
//         document.write(`${numero} x ${i} = ${numero*i} <br>`);
//     }
// }

// ejemplo de for con break
// let numero = parseInt(prompt("Ingrese un número para ver su tabla de multiplicar"));

// if(isNaN(numero)){
//     console.log("No ingresaste un número");
// }
// else{
//     for(let i =0; i<=12; i++){
//         if(i==5){
//             break; // si i es igual a 5 se rompe el ciclo. el break se usa para romper el ciclo
//         }
//         document.write(`${numero} x ${i} = ${numero*i} <br>`);
//     }
// }

// ejemplo de for con continue
// let numero = parseInt(prompt("Ingrese un número para ver su tabla de multiplicar"));

// if(isNaN(numero)){
//     console.log("No ingresaste un número");
// }
// else{
//     for(let i =0; i<=12; i++){
//         if(i==5){
//             continue; // Es como si se le estuviese diciendo a la computadora, si ves un cinco, saltátelo, y pasa al siguiente. 
//         }
//         document.write(`${numero} x ${i} = ${numero*i} <br>`);
//     }
// }

// ejemplo de ciclo for con arreglos 

// let frutas = ["manzana", "pera", "uva", "sandia", "melon", "platano", "fresa", "kiwi", "mango", "naranja"];

// for(let i = 0; i<frutas.length; i++){
//     if(frutas[i] == "uva"){
//         break;
//     }else{
//         document.write(frutas[i] + "<br>");
//     }
// }





// 1.	Calcular la media de un conjunto de números ingresados por el usuario:
// •	Pide al usuario que ingrese cuántos números desea promediar.
// •	Usa un for para pedirle al usuario cada número (por prompt()), conviértelo a número con parseInt() o Number().
// •	Suma todos esos valores.
// •	Al final del ciclo, calcula el promedio (suma total dividida por la cantidad de números) y muéstralo.

let cntNum_p_Promediar = parseInt(prompt("Ingrese cuántos números desea promediar"));
let suma = 0;

for(let i = 0; i < cntNum_p_Promediar; i++){
    let num = parseInt(prompt(`Ingrese el número ${i+1}`));
    if(isNaN(num)){
        document.write("No ingresaste un número");
    }else{
       
        suma = suma + num;
   
        
    }

}

document.write(`La suma de los números es: ${suma}` + "<br>");
let promedio = suma / cntNum_p_Promediar;
document.write(`El promedio de los números es: ${promedio}` + "<br>");  









// Ciclo while
// El ciclo while ejecuta un bloque de código mientras la condición sea verdadera, Por lo que, puede que este ciclo, no se ejecute 
// ninguna vez si la condición no se cumple.


//ejercicio de while

