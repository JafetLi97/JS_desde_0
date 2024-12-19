// let colorfavorito = "azul";

// let numeroDeLaSuerte = 7;

// document.write(colorfavorito);
// document.write("<br>");
// document.write(numeroDeLaSuerte);
// document.write("<br>");

// como saber cuando usar let o const
// let: se usa para variables que van a cambiar su valor
// const: se usa para variables que no van a cambiar su valor
//ejemplo para let
// let contador = 0;
// document.write(contador + "        Este es el valor inicial de la variable contador" + "<br>");
// contador = contador + 1;
// document.write("<br>");
// document.write(contador + "        Su valor inicial era de 0 y ahora es  " + contador + "<br>");
// document.write("<br>");

// //ejemplo para const
// document.write("<br>");
// const pi = 3.1416;
// document.write(pi + "              Este es el valor de pi, que es constante, que no cambia" + "<br>");

// //ejemplo de error al querer cambiar el valor de una constante
// // const pi = 3.1416;
// // pi = 4.1416;
// // document.write(pi);
// // esto nos arrojara un error ya que no se puede cambiar el valor de una constante


// Pasemos ahora a las condicionales, estas nos permiten tomar decisiones en nuestro código.    Empecemos con la condicional if.

//Estructura de la condicional if:
// if(condicion){
//     //codigo a ejecutar si la condicion es verdadera
// }else{
//     //codigo a ejecutar si la condicion es falsa 
// }
// Ejercicio 1
// 1.	Crea una variable llamada temperatura (tiene que ser en grados centigrados) (el usuario tiene que ingresar usando la funcion prompt) .
// 2.	Si la temperatura es mayor o igual a 30, muestra en consola: "Hace mucho calor".
// 3.	De lo contrario, muestra: "El clima está agradable".
// 4.   Todo se muestra en pantalla con alert()

// Por ejemplo, si temperatura = 35, debería imprimir "Hace mucho calor". Si temperatura = 25, debería imprimir "El clima está agradable".

let temp = 0

temp = prompt("Ingrese la temperatura en grados centigrados");

// if (temp >= 30) {
//     alert("Hace mucho calor");
// }
// else {
//     alert("El clima está agradable");
// }

// Ejercicio 2
// tranforma el ejercicio 1 a ternario

// temp>= 30 ? alert("Hace mucho calor") : alert("El clima está agradable");

// ahora validar que lo que ingrese el usuario sea un numero y no letras

if (isNaN(temp)) {
    alert("Por favor ingrese un número");
}
else {
    temp>= 30 ? alert("Hace mucho calor") : alert("El clima está agradable");
}

// como funciona la funcion isNaN?
// isNaN es una función que devuelve true si el argumento no es un número, y false si lo es.
// Ejemplo:
// isNaN(123) // false
// isNaN("123") // false
// isNaN("hola") // true
// isNaN("123hola") // true
// isNaN("hola123") // true
// isNaN("hola 123") // true
// isNaN("123 hola") // true
// isNaN("123.45") // false

// ejemplo de la vida real en una situación real para entender mejor la función:
// let edad = prompt("Ingrese su edad");
// if (isNaN(edad)) {   
//     alert("Por favor ingrese un número");
// } else {
//     alert("Su edad es: " + edad);
// }