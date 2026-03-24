
import { expect } from "expect";
import { Usuario } from "./Usuario";

describe('Usuario Class', () => {
    let usuario: Usuario;
    beforeEach(() => {
        usuario = new Usuario('Leo', 'leo@example.com', 'Developer', '5 years', true);
    });

    test(' should return the name of the user', () => {
        expect(usuario.getName()).toBe('Leo');
    });

    test(' should return the profile of the user', () => {
        expect(usuario.getProfile()).toBe('El Usuario Leo, se dedica a ser un Developer con trayectoria en 5 years.');
    });

    test(' should return true if the user is active', () => {
        expect(usuario.isActive()).toBe(true);
    });

    test(' should return false if the user is not active', () => {
        usuario = new Usuario('Leo', 'leo@example.com', 'Developer', '5 years', false);
        expect(usuario.isActive()).toBe(false);
    });
    
});

