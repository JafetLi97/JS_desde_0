// propiedades y metodos de los strings

// cual es la diferencia entre una propiedad y un metodo?  una propiedad es un valor que se puede obtener
// de un objeto, mientras que un metodo es una funcion que se puede ejecutar en un objeto.

// como diferenciar si estamso llamando a una propiedad o a un metodo? si al final de la palabra se le pone
// parentesis, entonces es un metodo, si no, es una propiedad.

const saludo = "Hola mundo";

// propiedad de length

console.log(saludo.length); // retorna la cantidad de caracteres que tiene el string

// metodo de indexOf

console.log(saludo.indexOf("la")); // retorna la posicion en la que se encuentra la palabra
// en el string// recordar que js es case sensitive y que se empieza a contar desde 0

// Cuándo No aparece o no encuentra la palabra, retorno -1. Siempre siempre va a retornar -1

// La lógica es la siguiente, en un programa que esté validando si es
// que existe una palabra en una cadena, se utilizará el siguiente if:

/*
if (saludo.indexOf("la") !== -1) {
  console.log("La palabra existe en el string");
} else {
  console.log("La palabra no existe en el string");
}
*/

// metodo de includes

console.log(saludo.includes("la")); // retorna un booleano si la palabra se encuentra en el string
// es case sensitive. La diferencia en cuanto a indexOf es que includes retorna un booleano, mientras
// que indexOf retorna la posicion en la que se encuentra la palabra


// metodo replace

console.log(saludo.replace("mundo", "Chanchito feliz"), saludo); // reemplaza una palabra por otra. En este caso
// reemplaza mundo por Mundo. Retorna un nuevo string, no modifica el original. En este caso los
// Argumentos funcionan como: primero a la palabra que quiero sustituir y después
// en el segundo argumento a la palabra por la que la quiero sustituir.

// Como la variable original no se modifica, Para que si se modifique hay que
// Guardarlo en una nueva variable y listo, Ya hay una variable que contiene el string cambiado
// Y también hay otra variable que contiene el texto original. 

// metodo toLowerCase

console.log(saludo.toLowerCase()); // convierte todo el string a minusculas

// metodo toUpperCase

console.log(saludo.toUpperCase()); // convierte todo el string a mayusculas

// metodo substring

console.log(saludo.substring(0, 4)); // retorna un string que empieza en 
// la posicion 1 y termina en la
// posicion 3. En este caso retorna "ol". el primer argumento es el inicio y el segundo es el final
// de la subcadena. Si no se pone el segundo argumento, entonces retorna desde el primer argumento
// hasta el final del string. el ultimo argumento no se incluye en la subcadena, por lo que si queremos que se incluya
// debemos ponerle un numero mas grande.

// metodo trim

const saludo2 = "      Hola      mundo          ";
console.log(saludo2.trim()); // elimina los espacios en blanco al principio y al final del string