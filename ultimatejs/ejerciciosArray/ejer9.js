const usuarios  = [
    { edad: 17, nombre: "Gafe", plan: "premium" },
    { edad: 13, nombre: "Chanchito", plan: "premium" },
    { edad: 32, nombre: "Fernanda", plan: "free" },
    { edad: 25, nombre: "Felipe", plan: "gold" },
];

const users = [
    {age: 29, name:'corroncho', membership:'premium'},
    {age: 13, name:'romina', membership:'free'},
    {age: 32, name:'gallina', membership:'free'},
];

// objetivo del eejercicio :

// supongam os que tenemos etos dos arrays distintos porque vienen de 
// bases de datos distintas

// lo que vamos a hacer es, antes de realizar cualquier tarea, es tomar 
// uno de estos dos arays y cambiar su estructura para que sea
// exactamente igual a la otra. 


// basicamente 

/**
 * unificar las estructuras de usuario y users
 * fusionar los dos arrays
 * ordenar por edad
 * crear plantilla html:
 * <li>Nombre: name,  Edad: age</li>
 * imprimir la lista en consola
 */

const users2 = users.map(u => {
    return {
        edad: u.age,
        nombre: u.name,
        plan: u.membership
    }
}
)
const usuarios2 = usuarios.map(u => {
    return {
        edad: u.edad,
        nombre: u.nombre,
        plan: u.plan
    }
}
)
const usuariosUnidos = [...users2, ...usuarios2];
const usuariosOrdenados = usuariosUnidos.sort((a, b) => b.edad - a.edad);
const usuariosNombres = usuariosOrdenados.map((u) => u.nombre);
const usuariosHtml = usuariosOrdenados.map((u) => `<li>Nombre: ${u.nombre}, Edad: ${u.edad}</li>`).join("");
const plantilla = `
    <ul>
        ${usuariosHtml}
    </ul>
`;
console.log(plantilla);
