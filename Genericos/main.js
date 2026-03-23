function identity(arg) {
    return arg;
}
var output1 = identity("Hola, TypeScript!");
var output2 = identity(42);
console.log("Output 1:", output1); // Salida: Hola, TypeScript!
console.log("Output 2:", output2); // Salida: 42
var Caja = /** @class */ (function () {
    function Caja(contenido) {
        this.contenido = contenido;
    }
    Caja.prototype.obtenerContenido = function () {
        return this.contenido;
    };
    return Caja;
}());
var CajadeString = new Caja("Libros");
console.log("Contenido de la caja String:", CajadeString.obtenerContenido()); // Salida: Contenido de la caja: Contenido de la caja
var CajadeNumero = new Caja(123);
console.log("Contenido de la caja Number:", CajadeNumero.obtenerContenido()); // Salida: Contenido de la caja: 123
