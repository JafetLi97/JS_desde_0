const usuarios = 
[
    {edad: 17, nombre: "Gafe", plan: 'premium'},
    {edad: 13, nombre: "Chanchito", plan: 'premium'},
    {edad: 32, nombre: "Fernanda", plan: 'free'},
    {edad: 25, nombre: "Felipe", plan: 'gold'},
];

const mayorEdadEnelObjeto = (usuarios) => usuarios.reduce((acc, user) => user.edad > acc.edad ? user : acc);

const personaMayor = mayorEdadEnelObjeto(usuarios); 
console.log(personaMayor, "es la persona mayor de edad");