"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var empleado_1 = require("./empleado");
var empleado = new empleado_1.Empleado("María López", 28, false, "Gerente de Ventas");
console.log(empleado.saludar());
console.log(empleado.obtenerInfo());
console.log("Nombre:", empleado.nombre); // Acceso a propiedad pública
