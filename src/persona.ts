export class Persona {
    nombre : string;
    apellido : string;
    edad : number;

    constructor(nombre: string, apellido: string, edad:number) {
        this.nombre = nombre,
        this.apellido = apellido,
        this.edad = edad
    }

    saludar(): void {
        console.log(`hola, me llamo ${this.nombre} ${this.apellido} mi eda es ${this.edad} años`);
    }
}




export class Trabajador extends Persona{
    sueldo : number;

    constructor(nombre : string, apellido : string, edad : number, sueldo : number){
        super(nombre, apellido, edad);
        this.sueldo = sueldo;

    }
}

export class Jefe extends Persona {
    trabajador : Persona[] = [];
    
    constructor(nombre : string, apellido : string, edad : number ){
        super(nombre, apellido, edad);
    }

  
    
}