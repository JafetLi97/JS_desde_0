const usuarios = 
[
    {edad: 17, nombre: "Gafe", plan: 'premium'},
    {edad: 13, nombre: "Chanchito", plan: 'free'},
    {edad: 32, nombre: "Fernanda", plan: 'free'},
    {edad: 25, nombre: "Felipe", plan: 'gold'},
];

const getPaidUsers = (usuarios) => {
    return usuarios.filter(usuario => usuario.plan !== 'free');
}
 

const usuariosPagados = getPaidUsers(usuarios);
console.log(usuariosPagados, "usuarios que pagan");