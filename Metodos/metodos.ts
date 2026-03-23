function imprimirMensaje(mensaje: string): void {
    console.log(mensaje);
}

imprimirMensaje("¡Hola, mundo!");

function sumar(number1: number, number2: number): number {
    return number1 + number2;
}

let resultado: number = sumar(5, 3);

console.log(`El resultado de la suma es: ${resultado}`);