// poli = muchas 
// morfismo = formas
// polimorfismo = muchas formas

function Select() {}

Select.prototype.render = function() {
    console.log("Renderizando select...");
}

function Checkbox() {}

Checkbox.prototype.render = function() {
    console.log("Renderizando checkbox...");
}

let componentes = [
    new Select(),
    new Checkbox()
]

componentes.forEach( c => c.render());


// el polimorfismo segun este ejemplo es la capacidad de
// que un mismo metodo (render) se comporte de diferente 
// manera dependiendo del objeto que lo invoque (Select 
// o Checkbox). y como funciona esto en JS? gracias a los
// prototipos y la cadena de prototipos. lo que esta pasando
// es que cada objeto tiene su propia implementacion del
// metodo render, y cuando se invoca el metodo render de
// cada objeto, JS busca en la cadena de prototipos del
// objeto para encontrar la implementacion del metodo
// render y lo ejecuta. si no encuentra el metodo en la
// cadena de prototipos, entonces lanza un error.
// esto es polimorfismo en JS, la capacidad de un mismo
// metodo de comportarse de diferente manera dependiendo
// del objeto que lo invoque.