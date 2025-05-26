

const usuarios = 
[
    {edad: 17, nombre: "Gafe", plan: 'premium'},
    {edad: 13, nombre: "Chanchito", plan: 'premium'},
    {edad: 32, nombre: "Fernanda", plan: 'free'},
    {edad: 25, nombre: "Felipe", plan: 'gold'},
];

const cuantosPremium = users => 
{
    return users.filter(user => user.plan !== 'free').length;
}

const cuantosMayores = users =>
{
    return users.filter(user => user.edad > 18).length;
}


console.log(cuantosPremium(usuarios), "usuarios que pagan");
console.log(cuantosMayores(usuarios), "usuarios mayores de edad");



// otra forma de hacerlo con reduce()
const usuarios2 = 
[
    {edad: 17, nombre: "Gafe", plan: 'premium'},
    {edad: 13, nombre: "Chanchito", plan: 'premium'},
    {edad: 32, nombre: "Fernanda", plan: 'free'},
    {edad: 25, nombre: "Felipe", plan: 'gold'},
];
const cuantosPremium2 = users => 
{
    return users.reduce((acc, user) => {
        if (user.plan !== 'free') {
            acc++;
        }
        return acc;
    }, 0);
}
const cuantosMayores2 = users =>
{
    return users.reduce((acc, user) => {
        if (user.edad > 18) {
            acc++;
        }
        return acc;
    }, 0);
}
console.log(cuantosPremium2(usuarios2), "usuarios que pagan");
console.log(cuantosMayores2(usuarios2), "usuarios mayores de edad");