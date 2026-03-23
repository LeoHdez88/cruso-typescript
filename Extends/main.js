var nombre = "Juan Pérez";
console.log(nombre.length);
function ObtenerLongitud(objeto) {
    var longitud = objeto.length;
    var tipo = typeof objeto;
    console.log("El tipo del objeto es: ".concat(tipo, " y la longitud es: ").concat(longitud));
    return objeto.length;
}
console.log(ObtenerLongitud(nombre)); // Output: 11
console.log(ObtenerLongitud([1, 2, 3, 4, 5])); // Output: 5
