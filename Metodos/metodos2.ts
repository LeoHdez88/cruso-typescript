
function saludar(nombre: string, saludo?: string): string {
    if (saludo) {
        return `¡${saludo}, ${nombre}!`;
    }else {
    return `¡Hola, ${nombre}!`;
    }
};

console.log(saludar("María"));
console.log(saludar("Juan", "Buenos días"));

// parametros multiples
function sumarTodos(...numeros: number[]): number {
    return numeros.reduce((acumulador, numero) => acumulador + numero, 0);
}

console.log("La suma de todos los números es: ", sumarTodos(1, 2, 3, 4, 5));

// valores por defecto
function despedir(nombre: string, despedida: string = "Adiós"): string {
    return `¡${despedida}, ${nombre}!`;
}

console.log(despedir("Ana"));
console.log(despedir("Carlos", "Hasta luego"));
