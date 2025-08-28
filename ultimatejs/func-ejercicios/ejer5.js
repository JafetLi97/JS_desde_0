function ordenarletrasAtoZNoSpaces(texto, fn){
    const result = texto.toLowerCase().split('').filter(letra => letra !== ' ').sort().join('');
    // Convertir el texto a minúsculas, dividirlo en caracteres,
    // filtrar los espacios, ordenar los caracteres alfabéticamente y unirlos de nuevo en una cadena
    fn(result);
}


ordenarletrasAtoZNoSpaces('hola mundo', console.log)