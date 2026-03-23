let nombre: string = "Juan Pérez";

console.log(nombre.length);

function ObtenerLongitud<T extends { length: number }>(objeto: T): number {
    let longitud: number = objeto.length;
    let tipo: string = typeof objeto;
    console.log(`El tipo del objeto es: ${tipo} y la longitud es: ${longitud}`);
    return objeto.length;
}
console.log(ObtenerLongitud(nombre)); // Output: 11

console.log(ObtenerLongitud([1, 2, 3, 4, 5])); // Output: 5
