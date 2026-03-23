interface Persona {
    nombre: string;
    edad: number;
    direccion: string;
    telefono: string;
}

let persona: Persona = {
    nombre: "Juan Pérez",
    edad: 30,
    direccion: "Calle Falsa 123",
    telefono: "555-1234"
};

console.log("Persona: ", persona);

let personas: Persona[] = [
    {
        nombre: "Ana Gómez",
        edad: 25,
        direccion: "Calle Falsa 456",
        telefono: "555-5678"
    },
    {
        nombre: "Carlos López",
        edad: 35,
        direccion: "Calle Falsa 789",
        telefono: "555-9012"
    }   
]

console.log("Personas: ", personas);

interface Sumar {
    (a: number, b: number): number;
}

let sumar: Sumar = (a: number, b: number): number => {
    return a + b;
}
console.log("Suma: ", sumar(5, 10));
