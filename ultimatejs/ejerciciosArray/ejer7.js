const usuarios = [
  { edad: 17, nombre: "Gafe", plan: "premium" },
  { edad: 13, nombre: "Chanchito", plan: "premium" },
  { edad: 32, nombre: "Fernanda", plan: "free" },
  { edad: 25, nombre: "Felipe", plan: "gold" },
];


const groupBy = (arr, prop) => {
    return arr.reduce((acc, el) => {
        let valor = el[prop];

        acc[valor] = acc[valor] ? acc[valor] : [];
        acc[valor].push(el);
        return acc;
    }, {});
}

const usuariosAgrupados = groupBy(usuarios, "plan");
console.log(usuariosAgrupados);