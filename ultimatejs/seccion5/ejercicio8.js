// crear un algoritmo que tome un array de objetos y devuelva un rray de pares

let array = [{
    id: 1,
    nombre: 'Felipe'
  },
  {
    id: 2,
    nombre: 'Felix'
  },
  {
    id: 3,
    nombre: 'Chanchito'
  }];


  function toPairs (array) {
    let pares = [];
    for( idx in array){
        let elemento = array[idx];
        pares[idx] = [elemento.id, elemento];
    }
    return pares;
  }


  let result = toPairs(array);
    console.log(result); // [[1, { id: 1, nombre: 'Felipe' }], [2, { id: 2, nombre: 'Felix' }], [3, { id: 3, nombre: 'Chanchito' }]]