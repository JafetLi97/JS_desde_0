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

const pequenios = gente.filter(g=> g.edad>=0 && g.edad < 5);

//console.log(pequenios, "pequeños");
//console.log("array original", gente); // el array original no se modifica, el modificado 
// es el que se guarda en la variable pequenios

// ejercicio 1 para filter, obtener los numeros pares de un array
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const pares = numeros.filter((numpar) => numpar % 2 == 0)

//console.log(pares)

// filtrar palabras largas (mayores a 5 letras)
const palabras = ["hola", "mundo", "javascript", "programacion", "python", "html", "machincuepa", "gato", "perro"];

const mayoresA5letras = palabras.filter((p) => p.length<=5)

//console.log(mayoresA5letras)


// ejercicio 3,  filtrar productos por precio mayor a 100

const productos = [
  { id: 1, nombre: "Camiseta", precio: 50 },
  { id: 2, nombre: "Pantalón", precio: 120 },
  { id: 3, nombre: "Zapatos", precio: 80 },
  { id: 4, nombre: "Chaqueta", precio: 200 },
  { id: 5, nombre: "faja", precio: 500}

];

const mayorCien = productos.filter(prd => prd.precio > 100)

//console.log(mayorCien)


// ejercicio 5: filtrar y mapear usuarios activos, primero definir 
// los activos y luego crear un array solo con sus nombres

const usuarios = [
  { id: 1, nombre: "Ana", activo: true },
  { id: 2, nombre: "Luis", activo: false },
  { id: 3, nombre: "María", activo: true },
  { id: 4, nombre: "Carlos", activo: false }
];

const nombresActivos = usuarios.filter( u => u.activo === true).map( u => u.nombre)

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
      { title: "Llamar a mamá", completed: true }
    ]
  },
  {
    id: 2,
    nombre: "Pedro",
    tareas: [
      { title: "Pagar facturas", completed: true },
      { title: "Estudiar JS", completed: true }
    ]
  },
  {
    id: 3,
    nombre: "Sofía",
    tareas: [
      { title: "Ir al gym", completed: false },
      { title: "Leer libro", completed: false }
    ]
  }
];

const usuariosConTareasCompletadas = usuariosConTareas.filter(utc => {
  const tareasCompletadas = utc.tareas.filter(tarea => tarea.completed === true);
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
      { descripcion: "Optimización SEO", prioridad: "baja" }
    ]
  },
  {
    id: 2,
    nombre: "Mantenimiento app móvil",
    tareas: [
      { descripcion: "Actualizar dependencias", prioridad: "media" },
      { descripcion: "Corregir bug login", prioridad: "alta" }
    ]
  },
  {
    id: 3,
    nombre: "Campaña de marketing",
    tareas: [
      { descripcion: "Brief creativo", prioridad: "alta" },
      { descripcion: "Compra de medios", prioridad: "alta" },
      { descripcion: "Análisis de métricas", prioridad: "media" },
      { descripcion: "A/B testing", prioridad: "alta" }
    ]
  }
];

const proyectosT =  proyectos.filter( pyt => {
  const tareasP = pyt.tareas.filter( tarea => tarea.prioridad === "alta")
  return tareasP.length >=3;
})

console.log(proyectosT)