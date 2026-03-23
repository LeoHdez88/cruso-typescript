import { Empleado } from "./empleado";

let empleado = new Empleado("María López", 28, false, "Gerente de Ventas");
console.log(empleado.saludar());
console.log(empleado.obtenerInfo());

console.log("Nombre:", empleado.nombre); // Acceso a propiedad pública