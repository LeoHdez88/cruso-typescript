interface Direccion {
    calle: string;
    numero: number;
    ciudad?: string;
}

let direccion: Direccion = {
    calle: "Calle Principal",
    numero: 123,
    ciudad: "Monterrey"
};

console.log("Dirección: ", direccion);


// Read Only properties
interface Persona {
    readonly id: number;
    readonly nombre: string;
    readonly edad: number;
}

let persona: Persona = {
    id: 1,
    nombre: "Juan Pérez",
    edad: 30
};

console.log("PersonaRead: ", persona);


// interface extendida

interface Empleado extends Persona {
    readonly puesto: string;
}

let empleado: Empleado = {
    id: 2,
    nombre: "Ana Gómez",
    edad: 25,
    puesto: "Desarrolladora"
};

console.log("Empleado: ", empleado);