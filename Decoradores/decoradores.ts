function PersonaDec(target: Function) {
    console.log("Decorador de clase aplicado a:", target);
    target.prototype.despedir = function( despedida: string) {
        return `${despedida}, soy ${this.nombre}`;
    }
}

@PersonaDec
class persona2 {
    nombre: string;
    edad: number;

    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar(Saludo: string):string {
        return `${Saludo}, mi nombre es ${this.nombre} y tengo ${this.edad} años.`;
    }

    despedir!: (despedida: string) => string;
}

let usuario = new persona2("Leo", 30);

console.log(usuario.saludar("Hola")); // Hola, mi nombre es Leo y tengo 30 años.

console.log(usuario.despedir("Adiós")); // Adiós, soy Leo

