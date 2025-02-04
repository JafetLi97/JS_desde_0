// Crear un un algoritmo que devuelva el número mayor y menor de un arreglo.

let arr =  [1,3,9,-1,30,-8,-90,100,1000,0,6];

function getMenormayor(arr){

    // Como en una competencia de saltos, Tomamos un valor inicial, por ejemplo el primer salto
    // y lo comparamos con los demás saltos, si el salto es menor que el valor inicial, entonces
    // el salto se convierte en el nuevo valor inicial, si el salto es mayor que el valor inicial
    // entonces se convierte en el nuevo valor mayor. Al final de la competencia, tendremos el
    // salto menor y el salto mayor
    let menor = arr[0];
    let mayor = arr[0];

    
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < menor){
            menor = arr[i];
        }
        if(arr[i] > mayor){
            mayor = arr[i];
        }
    }
    return [menor, mayor];
}


let menmay = getMenormayor(arr);
console.log(menmay); // [-90, 1000]