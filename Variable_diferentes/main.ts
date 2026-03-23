let variableAny: any;

//variableAny = 42;
//variableAny = "Hola, soy una variable de tipo any";
variableAny = true;
console.log("valor de la variableAny: " + variableAny);

let variableUnknown: unknown;
//variableUnknown = 42;
variableUnknown = "Hola, soy una variable de tipo unknown";
//variableUnknown = true;
if (typeof variableUnknown === "string") {
    console.log("valor de la variableUnknown: " + variableUnknown);
}

// function throwError(message: string): never {
//     throw new Error(message);
// }

// throwError("¡Esto es un error!");

function logMessage(message: string): void {
    console.log("Mensaje: " + message);
}

logMessage("¡Hola, este es un mensaje de tipo void!");