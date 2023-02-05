"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Estudiantes = void 0;
class Estudiantes {
    //contrutor 
    constructor(nombre, cursos, apellidos) {
        this.id = "12345";
        //Inicializamos las propiedades
        this.nombre = nombre;
        if (apellidos) {
            this.apellidos = apellidos;
        }
        this.cursos = cursos;
    }
    get horasestudiadas() {
        let horasestudiadas = 0;
        this.cursos.forEach((Curso) => {
            horasestudiadas += Curso.horas;
        });
        return this.horasestudiadas;
    }
    set Id_estudiantes(id) {
        this.id = id;
    }
}
exports.Estudiantes = Estudiantes;
//# sourceMappingURL=Estudiantes.js.map