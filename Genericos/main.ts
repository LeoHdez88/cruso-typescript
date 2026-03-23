function identity<T>(arg: T): T {
    return arg;
}

let output1 = identity<string>("Hola, TypeScript!");
let output2 = identity<number>(42);
console.log("Output 1:", output1); // Salida: Hola, TypeScript!
console.log("Output 2:", output2); // Salida: 42


class Caja<T> {
    private contenido: T;   

    constructor(contenido: T) {
        this.contenido = contenido;
    }

    public obtenerContenido(): T {
        return this.contenido;
    }   

}

let CajadeString = new Caja<string>("Libros");
console.log("Contenido de la caja String:", CajadeString.obtenerContenido()); // Salida: Contenido de la caja: Contenido de la caja

let CajadeNumero = new Caja<number>(123);
console.log("Contenido de la caja Number:", CajadeNumero.obtenerContenido()); // Salida: Contenido de la caja: 123
