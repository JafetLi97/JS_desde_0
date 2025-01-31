// loop do while

let i = 0;

do{
     if (i % 2 === 0) {
        console.log("numero par : ", i);
    }
    i++;
}while (i <= 10);

// este loop se usa cuando el codigo se ejecutara por lo menos una vez, ya que primero se ejecuta 
// el codigo y luego se evalua la condicion
// en cambio en el while primero se evalua la condicion y luego se ejecuta el codigo