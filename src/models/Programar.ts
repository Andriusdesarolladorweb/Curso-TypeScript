
import { Niveles, ITarea } from "./interfaces/ITarea";

export class ProgramarTS implements ITarea {
    titulo: string;
    descripcion?: string | undefined;
    completada: boolean;
    urgencia?: Niveles | undefined;


    constructor(titulo: string, descripcion: string, completada : boolean, urgencia: Niveles){
        this.titulo = titulo,
        this.descripcion = descripcion,
        this.completada = completada,
        this.urgencia = urgencia
    }

    resume = () => {
        return `Tarea de programacion: ${this.titulo}- ${this.completada}`
    }

}