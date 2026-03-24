var persona = {
    nombre: "Leo",
    edad: 30,
    ciudad: "Madrid"
};
console.log(persona.nombre); // Leo
function esNumero(valor) {
    return (typeof valor === "number");
}
var resultado1 = esNumero(42); // true
var resultado2 = esNumero("Hola"); // false
console.log(resultado1); // true
console.log(resultado2); // false
