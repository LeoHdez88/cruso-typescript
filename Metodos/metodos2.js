function saludar(nombre, saludo) {
    if (saludo) {
        return "\u00A1".concat(saludo, ", ").concat(nombre, "!");
    }
    else {
        return "\u00A1Hola, ".concat(nombre, "!");
    }
}
;
console.log(saludar("María"));
console.log(saludar("Juan", "Buenos días"));
// parametros multiples
function sumarTodos() {
    var numeros = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numeros[_i] = arguments[_i];
    }
    return numeros.reduce(function (acumulador, numero) { return acumulador + numero; }, 0);
}
console.log("La suma de todos los números es: ", sumarTodos(1, 2, 3, 4, 5));
// valores por defecto
function despedir(nombre, despedida) {
    if (despedida === void 0) { despedida = "Adiós"; }
    return "\u00A1".concat(despedida, ", ").concat(nombre, "!");
}
console.log(despedir("Ana"));
console.log(despedir("Carlos", "Hasta luego"));
