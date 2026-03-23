var nombres = ["Alice", "Bob", "Charlie"];
console.log("Nombres: ", nombres);
var edades = [25, 30, 35];
console.log("Edades: ", edades);
var mixto = ["Alice", 25, true];
console.log("Mixto: ", mixto);
var personas = [
    { nombre: "Alice", edad: 25, esDesarrollador: true },
    { nombre: "Bob", edad: 30, esDesarrollador: false },
    { nombre: "Charlie", edad: 35, esDesarrollador: true }
];
console.log("Personas: ", personas);
personas.push({ nombre: "David", edad: 28, esDesarrollador: false });
console.log("Personas Actualizadas: ", personas);
//Tupla
var PersonaTupla = ["Alice", 25, true];
console.log("Persona Tupla: ", PersonaTupla);
var personasTupla = [];
personasTupla.push(["Alice", 25, true]);
personasTupla.push(["Bob", 30, false]);
personasTupla.push(["Charlie", 35, true]);
personasTupla.forEach(function (persona) {
    console.log("Persona Tupla:", persona);
    var nombre = persona[0];
    var edad = persona[1];
    var esDesarrollador = persona[2];
    console.log("Nombre: " + nombre);
    console.log("Edad: " + edad);
    console.log("Es Desarrollador: " + esDesarrollador);
    console.log("-----------------------");
});
console.log("Personas Tupla: ", personasTupla);
