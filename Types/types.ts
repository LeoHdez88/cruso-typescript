type personaType = {
    nombre: string,
    edad: number,
    ciudad: string
};

type Parcial<T> = {
    [P in keyof T]?: T[P]
};

type personaParcial = Parcial<personaType>;

type SoloLectura<T> = {
    readonly [P in keyof T]: T[P]
};

type personaSoloLectura = SoloLectura<personaType>;

let persona: personaSoloLectura = {
    nombre: "Leo",
    edad: 30,
    ciudad: "Madrid"
};

console.log(persona.nombre); // Leo

// template literal types

type Variantes = "pequeño" | "mediano" | "grande";
type ClasesCSS = `btn-${Variantes}`;

// let btonPequeño: ClasesCSS = "btn-pequeño";
// let btonMediano: ClasesCSS = "btn-mediano";
// let btonGrande: ClasesCSS = "btn-grande";

//Conditional types

type EsNumero<T> = T extends number ? true : false;

function esNumero<T>(valor: T): EsNumero<T> {
    return (typeof valor === "number") as EsNumero<T>;
}

const resultado1 = esNumero(42); // true
const resultado2 = esNumero("Hola"); // false

console.log(resultado1); // true
console.log(resultado2); // false
