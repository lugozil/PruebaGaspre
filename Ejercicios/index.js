// Declaracion de funciones
const obtenerFactoresPrimos = require('./obtenerFactoresPrimos');
const stringUtils = require('./stringUtils');

// Ejemplo de uso de obtenerFactoresPrimos
console.log(obtenerFactoresPrimos(12)); // [2, 2, 3]
console.log(obtenerFactoresPrimos(28)); // [2, 2, 7]

// Ejemplo de uso de stringUtilsff
const text = "String";
const isUnique = stringUtils(text);
console.log(isUnique); // false