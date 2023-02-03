import { Curso } from "./Curso";

export class Estudiantes {
    
    //propieda 
    nombre: string;
    apellidos?: string;
    cursos : Curso[];
    private id: string = "12345";
    //contrutor 

    constructor(nombre: string, cursos : Curso[],  apellidos?: string ){
        //Inicializamos las propiedades
        this.nombre = nombre
      if(apellidos){
        this.apellidos = apellidos
      }
      this.cursos = cursos
    }

    get horasestudiadas() : number{
      let horasestudiadas = 0;
      this.cursos.forEach((Curso: Curso) =>{
        horasestudiadas += Curso.horas;
      })

      return this.horasestudiadas;
    }

    set  Id_estudiantes (id: string)  {
    this.id = id;
    }
  }
