// metodo map();

// const pipol = [
//     { nombre: "Pipol",
//     apellido: "Perez",
//     edad: 20
//     },
//     { nombre: "felipe",
//        apellido: "tucho",
//        edad: 12
//     }
// ];

// const edades = pipol.map(p => p.edad); // p es la llave para acceder a los datos de cada objeto del array
// const nombres = pipol.map(p => p.nombre); // p es la llave para acceder a los datos de cada objeto del array
// const apellido = pipol.map(p => p.apellido); // p es la llave para acceder a los datos de cada objeto del array
// console.log(edades);
// console.log(nombres);
// console.log(apellido);
// console.log('--------------------');

// const numeros = [1,2,3,4,5,6,7,8,9,10];
// const numeros2 = numeros.map(n => n*n);
// console.log(numeros2, 'obteniendo los cuadrados de un numero con map()');
// console.log('--------------------');

// metodo filter();

// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const numeros2 = numeros.filter((n) => n > 5);
// const numeros3 = numeros.filter((n) => n % 2 === 0);
// console.log(numeros2, "numeros mayores a 5");
// console.log(numeros3, "numeros pares");
// console.log("--------------------");

// const pipol = [
//   { nombre: "Pipol", apellido: "Perez", edad: 20 },
//   { nombre: "felipe", apellido: "tucho", edad: 12 },
// ];

// const mayores = pipol.filter(p => p.edad > 18);
// const menores = pipol.filter(p => p.edad < 18);
// console.log(mayores, "mayores de edad");
// console.log(menores, "menores de edad");

// metodo filter hasta que se me quede con distintos tipos de ejemplos

const gente = [
  { nombre: "aaron", edad: 65 },
  { nombre: "beth", edad: 2 },
  { nombre: "cara", edad: 13 },
  { nombre: "daniel", edad: 3 },
  { nombre: "ella", edad: 25 },
  { nombre: "fin", edad: 1 },
  { nombre: "george", edad: 43 },
];

const pequenios = gente.filter((g) => g.edad >= 0 && g.edad < 5);

//console.log(pequenios, "pequeños");
//console.log("array original", gente); // el array original no se modifica, el modificado
// es el que se guarda en la variable pequenios

// ejercicio 1 para filter, obtener los numeros pares de un array
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const pares = numeros.filter((numpar) => numpar % 2 == 0);

//console.log(pares)

// filtrar palabras largas (mayores a 5 letras)
const palabras = [
  "hola",
  "mundo",
  "javascript",
  "programacion",
  "python",
  "html",
  "machincuepa",
  "gato",
  "perro",
];

const mayoresA5letras = palabras.filter((p) => p.length <= 5);

//console.log(mayoresA5letras)

// ejercicio 3,  filtrar productos por precio mayor a 100

const productos = [
  { id: 1, nombre: "Camiseta", precio: 50 },
  { id: 2, nombre: "Pantalón", precio: 120 },
  { id: 3, nombre: "Zapatos", precio: 80 },
  { id: 4, nombre: "Chaqueta", precio: 200 },
  { id: 5, nombre: "faja", precio: 500 },
];

const mayorCien = productos.filter((prd) => prd.precio > 100);

//console.log(mayorCien)

// ejercicio 5: filtrar y mapear usuarios activos, primero definir
// los activos y luego crear un array solo con sus nombres

const usuarios = [
  { id: 1, nombre: "Ana", activo: true },
  { id: 2, nombre: "Luis", activo: false },
  { id: 3, nombre: "María", activo: true },
  { id: 4, nombre: "Carlos", activo: false },
];

const nombresActivos = usuarios
  .filter((u) => u.activo === true)
  .map((u) => u.nombre);

//console.log(nombresActivos);

// ejercicio 5: Ejercicio 5 (Avanzado): Filtrar usuarios por tareas completadas
//Tienes un array de usuarios; cada uno tiene un array de tareas con
// { title, completed }. Filtra los usuarios que tengan al menos
// 2 tareas marcadas como completadas.

const usuariosConTareas = [
  {
    id: 1,
    nombre: "Laura",
    tareas: [
      { title: "Comprar leche", completed: true },
      { title: "Enviar email", completed: false },
      { title: "Llamar a mamá", completed: true },
    ],
  },
  {
    id: 2,
    nombre: "Pedro",
    tareas: [
      { title: "Pagar facturas", completed: true },
      { title: "Estudiar JS", completed: true },
    ],
  },
  {
    id: 3,
    nombre: "Sofía",
    tareas: [
      { title: "Ir al gym", completed: false },
      { title: "Leer libro", completed: false },
    ],
  },
];

const usuariosConTareasCompletadas = usuariosConTareas.filter((utc) => {
  const tareasCompletadas = utc.tareas.filter(
    (tarea) => tarea.completed === true
  );
  return tareasCompletadas.length >= 2;
});

//console.log(usuariosConTareasCompletadas)

// en esque caso cuando hay un array (de objetos) dentro de otro array de objetos,
// es decir, cuando una llave de un objeto en el array resulta que tiene otro array
// de objetos, el tratamiento es distinto. Por ejemplo, en este caso con el filter
// Primero hay que acceder al array original, En el ejemplo de arriba son tres objetos
// Dentro del array, Ahora para acceder a los objetos que están Dentro de la llave
// tareas: Lo que se tiene que hacer es crear otra variable y hacer el mismo proceso
// con el filter, desde utc, ahora si ya se puede acceder a tareas y dentro de tareas
// Se le pregunta que si la propiedad Completed Dentro de tareas, Es estrictamente igual a True.
// Luego retornamos los usuarios Cuyas tareas completadas sea de dos o mayor,
// Habiéndolo puesto previamente el requisito con length. Si no se le pone el
// .length, Va a retornar todos los que tengan True En la propiedad completed
// Pero bueno como el requisito es sólo los que tengan dos o más tareas completadas
//
//

/*
Ejercicio 6 (Avanzado, anidamiento y conteo): Filtrar proyectos con 
suficientes tareas de alta prioridad

Tienes un array de proyectos; cada uno es un objeto con un array tareas, 
y cada tarea tiene { descripcion, prioridad }. Filtra los proyectos que 
tengan al menos 3 tareas con prioridad === "alta".

*/

const proyectos = [
  {
    id: 1,
    nombre: "Lanzamiento web",
    tareas: [
      { descripcion: "Diseño de landing", prioridad: "media" },
      { descripcion: "Integración API", prioridad: "alta" },
      { descripcion: "Tests de usuario", prioridad: "alta" },
      { descripcion: "Configuración CI/CD", prioridad: "alta" },
      { descripcion: "Optimización SEO", prioridad: "baja" },
    ],
  },
  {
    id: 2,
    nombre: "Mantenimiento app móvil",
    tareas: [
      { descripcion: "Actualizar dependencias", prioridad: "media" },
      { descripcion: "Corregir bug login", prioridad: "alta" },
    ],
  },
  {
    id: 3,
    nombre: "Campaña de marketing",
    tareas: [
      { descripcion: "Brief creativo", prioridad: "alta" },
      { descripcion: "Compra de medios", prioridad: "alta" },
      { descripcion: "Análisis de métricas", prioridad: "media" },
      { descripcion: "A/B testing", prioridad: "alta" },
    ],
  },
];

const proyectosT = proyectos.filter((pyt) => {
  const tareasP = pyt.tareas.filter((tarea) => tarea.prioridad === "alta");
  return tareasP.length >= 3;
});

//console.log(proyectosT)

// metodo map()

// un ejemplo muy sencillo para entender el metodo map es el siguiente:
// imagina que tienes un array de numeros y quieres obtener un nuevo arra
// y con el cuadrado de cada numero. el metodo mas es como una maquina que
// va a pasar uno por uno cada elemento del array y a cada uno le hara un
// cambio nosotros le diremos que cambio queremos hacerle a cada elemento

// ejercicios de practica del metodo map()

// Ejercicio 1 (Básico): Doblar números
// Tienes un array de números. Usa map para crear un nuevo array donde
// cada número se duplique.

const numer = [1, 2, 3, 4, 5];

const doblados = numer.map((n) => n * 2);

// console.log(numer, doblados);

// ejercicio 2

// dada un array de strings, davolver este mismo array pero todas las strings
// dentro del array estan en mayusculas

const palabra = [
  "perro",
  "felipe",
  "santana",
  "filiberto",
  "marcelowow",
  "tepescuinte",
];

const mayus = palabra.map((p) => p.toUpperCase());
//console.log(palabra, mayus)

/* ejercicio 3 

Ejercicio 3 (Objetos): Extraer propiedades
Tienes un array de objetos personas. Usa map para crear un array 
solo con sus nombres.
*/

// En este tipo de ejercicios el Maps sirve para crear un nuevo array únicamente
// Con una propiedad del objeto, En este caso nombres y eso sirve para crear un nuevo
// array Únicamente con los nombres si es que se nos ha pedido
const personas = [
  { id: 1, nombre: "Ana", edad: 28 },
  { id: 2, nombre: "Luis", edad: 34 },
  { id: 3, nombre: "María", edad: 22 },
];

const nombr = personas.map((p) => p.nombre);

// console.log(nombr)

/*

Ejercicio 4


Ejercicio 4 (Encadenando métodos): Filtrar y transformar
Tienes un array de números mixtos. Primero filtra los positivos y 
luego usa map para obtener su raíz cuadrada.*/

const mixtos = [-4, 9, 16, -25, 36, 0, 2, 56, 10];

const cdlp = mixtos.filter((m) => m >= 0).map((c) => c * c); //cdlp means cuadrado de los positivos

cdlp.sort((a, b) => a - b); // ordenando el array de menor a mayor

//console.log(cdlp);























/* ejercicio 5 

Ejercicio 5 (Avanzado): Resumen de órdenes
Tienes un array de órdenes; cada orden tiene id y un array items con 
{ nombre, precio, cantidad }. Usa map para generar un nuevo array de 
 objetos { id, total }, donde total es la suma de precio * cantidad de 
 cada ítem.*/

const ordenes = [
  {
    id: 101,
    items: [
      { nombre: "Camisa", precio: 20, cantidad: 2 },
      { nombre: "Pantalón", precio: 40, cantidad: 1 },
    ],
  },

  {
    id: 102,
    items: [
      { nombre: "Calcetines", precio: 5, cantidad: 5 },
      { nombre: "Sombrero", precio: 15, cantidad: 1 },
    ],
  },

  {
    id: 103,
    items: [
      { nombre: "Chaqueta", precio: 80, cantidad: 1 },
      { nombre: "Guantes", precio: 10, cantidad: 2 },
    ],
  }
];


const resumenOrdenes = ordenes.map((orden) => {
  const total = orden.items.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
  return { id: orden.id, total: total };
}
);
//console.log(resumenOrdenes);




// metodo reduce 


// ejercicio 1 (Básico): Sumar números

// Tienes un array de números. Usa reduce para obtener la suma total.

const numerosArray = [1, 10, 3, 8, 5];

const sumas = numerosArray.reduce((acc, el) => {
  acc = acc+el
  return acc;
},0);

console.log(sumas);



// Ejercicio 2 (Intermedio): Concatenar palabras
// Tienes un array de palabras. Usa reduce() para formar una sola frase separada
//  por espacios.

const palabrasRed = ["Hola", "mi", "nombre", "es", "Mauricio"];

const pUnidas = palabrasRed.reduce((acc,el) => {
    acc = acc + " " + el
    return acc;
});

console.log(pUnidas)