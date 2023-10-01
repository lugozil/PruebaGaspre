function obtenerFactoresPrimos(numero) 
{
    const factoresPrimos = [];
  
    for (let i = 2; i <= numero / 2; i++) {
      // Verificar si i es un factor primo
      while (numero % i === 0) {
        factoresPrimos.push(i);
        numero /= i;
      }
    }
  
    // Si el número restante es mayor que 1, es un factor primo
    if (numero > 1) {
      factoresPrimos.push(numero);
    }
  
    return factoresPrimos;
}
  
module.exports = obtenerFactoresPrimos;