const usuarios = [
  { edad: 17, nombre: "Gafe", plan: "premium" },
  { edad: 13, nombre: "Chanchito", plan: "free" },
  { edad: 32, nombre: "Fernanda", plan: "free" },
  { edad: 25, nombre: "Felipe", plan: "gold" },
];


// lo que se tendra que hacer :

/**
 * Obtener los usuarios pago
 * ordenar de mayor a menor edad
 * Devolver el nombre del usuario
 * crear una plantilla html
 * imprimirla en consola
 */

const usuariosPago = usuarios.filter((u) => u.plan !== "free");
const usuariosOrdenados = usuariosPago.sort((a, b) => b.edad - a.edad);
const usuariosNombres = usuariosOrdenados.map((u) => u.nombre);
const usuariosHtml = usuariosNombres.map((u) => `<li>${u}</li>`).join("");
const plantilla = `
    <ul>
        ${usuariosHtml}
    </ul>
`;
console.log(plantilla);
// console.log(usuariosNombres);