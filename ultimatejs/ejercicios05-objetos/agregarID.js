// agregar id

let objeto = { name: "pirulinpompam" };

const agregarID = (objeto) => {
  if (typeof objeto === "object") {
    objeto.id = Math.random();
  }
  return objeto;
};

agregarID(objeto);
console.log(objeto);
