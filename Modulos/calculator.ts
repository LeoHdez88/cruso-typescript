export function suma(numero1: number, numero2: number): number {
    return numero1 + numero2;
}

export function resta(numero1: number, numero2: number): number {
    return numero1 - numero2;
}

export function multiplicacion(numero1: number, numero2: number): number {
    return numero1 * numero2;
}   

export function division(numero1: number, numero2: number): number {
    if (numero2 === 0) {
        throw new Error("No se puede dividir por cero");
    }
    return numero1 / numero2;
}

export const PI = 3.14159;
