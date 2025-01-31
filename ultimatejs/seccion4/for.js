// ciclos for

// la diferenbcia de este ciclo con el while y con el do while, es que este ciclo tiene una 
// estructura mas compacta. este ciclo tiene 3 partes, la primera parte es la inicializacion de 
// la variable que se va a usar en el ciclo, la segunda parte es la condicion que se va a evaluar
// para saber si se ejecuta el ciclo o no, y la tercera parte es la actualizacion de la variable.

// en este ciclo se sabe de antemano cuantas veces se va a iterar el ciclo.

// ejemplo de numeros pares con ciclo for

for(let i=0; i<=20; i++){
    if(i % 2 === 0){
        console.log("numero par : ", i);
    }

}