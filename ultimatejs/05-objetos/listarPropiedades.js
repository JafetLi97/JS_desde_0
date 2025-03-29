// listar propiedades de un objeto

const punto = {
    x: 10,
    y: 20,
    dibujar: function(){
        console.log(`Dibujando en x:${this.x}, y:${this.y}`);
    }
};

//delete punto.dibujar
if('dibujar' in punto){
    punto.dibujar();
    
}

// let keys = Object.keys(punto); // retorna un array con las propiedades del objeto y es lo mismo
// // que hacer lo siguiente:
//console.log(Object.keys(punto));

for(let llave of Object.keys(punto)){ // for of recorre los valores de un array mientras que for in
    // recorre las propiedades de un objeto. Object.keys(punto) retorna un array con las propiedades
    // del objeto punto
    console.log(llave, punto[llave]);
}

// existe otra forma de listar las propiedades de un objeto

for(let entry of Object.entries(punto)){
    console.log(entry);
}