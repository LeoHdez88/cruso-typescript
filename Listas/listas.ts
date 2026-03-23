let nombres: string[] = ["Alice", "Bob", "Charlie"];
console.log("Nombres: " , nombres);

let edades: number[] = [25, 30, 35];
console.log("Edades: " ,edades);

let mixto: any[] = ["Alice", 25, true];
console.log("Mixto: " , mixto); 

interface Persona {
    nombre: string;
    edad: number;
    esDesarrollador: boolean;
}

let personas: Persona[] = [
    { nombre: "Alice", edad: 25, esDesarrollador: true },
    { nombre: "Bob", edad: 30, esDesarrollador: false },
    { nombre: "Charlie", edad: 35, esDesarrollador: true }
];

console.log("Personas: " , personas);

personas.push({ nombre: "David", edad: 28, esDesarrollador: false });
console.log("Personas Actualizadas: " , personas);

 //Tupla

 let PersonaTupla: [string, number, boolean] = ["Alice", 25, true];
    console.log("Persona Tupla: " , PersonaTupla);

let personasTupla: [string, number, boolean][] = [];
personasTupla.push(["Alice", 25, true]);
personasTupla.push(["Bob", 30, false]);
personasTupla.push(["Charlie", 35, true]);

personasTupla.forEach((persona) => {
    console.log("Persona Tupla:", persona);

    let nombre: string = persona[0];
    let edad: number = persona[1];
    let esDesarrollador: boolean = persona[2];
    
    console.log("Nombre: " , nombre);
    console.log("Edad: " , edad);
    console.log("Es Desarrollador: " , esDesarrollador);
    console.log("-----------------------");
});

console.log("Personas Tupla: " , personasTupla);

// enumeradores

enum diasSemana {
    Lunes,
    Martes,
    Miercoles,
    Jueves,
    Viernes,
    Sabado,
    Domingo
}

let dia: diasSemana = diasSemana.Miercoles;
console.log("Día de la semana: " , dia);
