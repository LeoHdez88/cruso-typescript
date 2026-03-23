import { suma, resta, multiplicacion, division } from "./calculator";
import { PI } from "./calculator";


const resultado = suma(5, 3);
console.log(`El resultado de la suma es: ${resultado}`);

const resultadoResta = resta(5, 3);
console.log(`El resultado de la resta es: ${resultadoResta}`);

const resultadoMultiplicacion = multiplicacion(5, 3);
console.log(`El resultado de la multiplicación es: ${resultadoMultiplicacion}`);    

const resultadoDivision = division(5, 3);
console.log(`El resultado de la división es: ${resultadoDivision}`);

console.log(`El valor de PI es: ${PI}`);

