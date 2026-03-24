export class Usuario {
    nombre: string;
    email: string;
    profesion: string;
    trayectoria: string;
    estaActivo: boolean;

    constructor(nombre: string, email: string, profesion: string, trayectoria: string, estaActivo: boolean) {
        this.nombre = nombre;
        this.email = email;
        this.profesion = profesion;
        this.trayectoria = trayectoria;
        this.estaActivo = estaActivo;
    }

    getName(): string {
        return this.nombre;
    }

    getProfile(): string {
        return `El Usuario ${this.nombre}, se dedica a ser un ${this.profesion} con trayectoria en ${this.trayectoria}.`;
    }

    isActive(): boolean {
        console.log(this.estaActivo);
        return this.estaActivo;
    }

}