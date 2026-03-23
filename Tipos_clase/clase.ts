
export class Persona {
    public nombre: string;
    protected edad: number;
    private esDesarrollador: boolean;

    constructor(nombre: string, edad: number, esDesarrollador: boolean) {
        this.nombre = nombre;
        this.edad = edad;
        this.esDesarrollador = esDesarrollador;
    }

    public saludar(): string {
        this.esDev(); // Llamada al método privado para verificar si es desarrollador
        return `Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`;
    }   

    protected obtenerEdad(): number {
        return this.edad;
    }

    private esDev(): boolean {
        return this.esDesarrollador;
    }   
}
