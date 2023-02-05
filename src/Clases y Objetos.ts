import { error } from "console";
import { type } from "os";
import { Interface } from "readline";
import { setCookie } from "cookies-utils";
import { Curso } from "./models/Curso";
import { Estudiantes } from "./models/Estudiantes";
import { Lista_Cursos } from "./mock/Cursos.mok";
import { Trabajador, Jefe } from "./persona";


// Funciones 

/*

function DespedirPersona( nombre : string){
    return nombre
}

DespedirPersona("Andrius")

*/

function mutipleParams(...nombre : string[]): void {
    nombre.forEach((nombre) => {
        console.log(nombre);
    });

   const  Lista = ["Andrius", "Diorkys"];


mutipleParams(...Lista);
}

// Arrow fuction 
type Empleado = {
    nombre: string,
    eda: number
}

let EmpleadoAndrius: Empleado = {
    nombre : "Carla",
    eda : 20

}

const mostrarEmpleado = (empleado : Empleado) => `${empleado.nombre} tiene ${empleado.eda} años`;

mostrarEmpleado(EmpleadoAndrius);

const datosEmpleado = (empleado: Empleado):string =>{
    if(empleado.eda > 70){
        return `Empleado ${empleado.nombre} esta en edad de jubilacion`
    }else{
        return `Empleado ${empleado.nombre} esta en edad laboral `
    }
    
}
datosEmpleado(EmpleadoAndrius);

const ObtenerSalario = ( empleado : Empleado , cobrar: () =>  string ) => {

    if(empleado.eda > 70){
        return 
    } else{
        cobrar
    }
    
} 

const CobrarEmpleado =  (empleado : Empleado) =>  {
    console.log(`${empleado.nombre} cobra su salario`)
}

ObtenerSalario(EmpleadoAndrius, () => 'CobrarEmpleado' );

//Async funtions
async function ejemploAsync(): Promise<string> {
    await console.log("Tarea completada andes de seguir con la secuencia de instrucciones")
    console.log("Tarea completada")
    return  "Completado"
}

ejemploAsync()
.then((respuesta) =>{
    console.log("Repuesta", respuesta);
}).catch((error) => {
    console.log("ha habido un error", error)
}).finally(() => "Todo ha terminado")

//Generators
function* ejemploGenerators(){

    let index = 0;
    while(index < 5){
         yield index++;
    }
}

// guardamos la funcion 
let generadora = ejemploGenerators();

//acedemos a los valores 
console.log(generadora.next().value)

// Worker
function* wother(valor: number){
    yield valor;//emitimos del valor iniciar
    yield* Worker(valor);// llamos las emesiones 
    yield valor + 4;

}

function* Worker(valor: number){
    yield valor + 1;
    yield valor + 2;
    yield valor + 3;
    
}

let gereratorSaga = wother(0);

console.log(gereratorSaga.next().value);
console.log(gereratorSaga.next().value);
console.log(gereratorSaga.next().value);
console.log(gereratorSaga.next().value);
console.log(gereratorSaga.next().value);


// sobrecarga de funciones 
function mostrarError(error: string){
    console.log("un error", error)
}

//Persistencia de datos
//1. LocalStorage --> Almacena los datos en el navegador (no se eliminan automaticamente).
//2. SessionStorage --> la diferencia radica en la sesion de navegador. Es decir, los datos se pesisten en la sesion  de navegador.
//3. Cookis --> Tienen una fechad caducida y tambien un ambito de URL

//LocalStorage

/*function guaradaEnLocalStorage (): void{
    
}*/
//cookies
const cookieOptions = {
    name: "Usuario", // string,
    value: "Andrius", // string,
    expires: new Date(2099, 10, 1), // optional Date,
    path: "/", // optional string,
  
  };

  // seteamos la cookies
  setCookie(cookieOptions)

  // ** Clases


  //creamos un curso 
/*
const cursoTs = new Curso("Ts", 15);
const cursoJs = new Curso("Js", 15);

const listacurso: Curso[] = [];

listacurso.push(cursoTs, cursoJs);
*/

//Usamos el mock
const listacurso : Curso[] = Lista_Cursos;

const Andrius: Estudiantes = new Estudiantes("Andrius", listacurso, "San Jose");

console.log(`${Andrius.nombre}  estudia:`);
//Iteramos por cada unos de ellos
Andrius.cursos.forEach((Curso) => {
    console.log(`- ${Curso.nombre} (${Curso.horas})`)
});


const cursoAg = new Curso("Angular", 25);
Andrius.cursos.push(cursoAg); //añadimos

//Cinaocer horas estudiantes 
Andrius.horasestudiadas;
Andrius.Id_estudiantes;

// saber la instacia de u objeto/variable 
// -Typeof
// -Instanceof

let fechaNacimiento = new Date(2005,1,2);

if(fechaNacimiento instanceof Date){
    console.log("es una fecha")
}

if(Andrius instanceof Estudiantes){
    console.log("es un estudiante")
}

//herencia  y polimorfismo

let trabajor01  = new Trabajador("Diorkys", "Cabrera",  18, 25.000);
let trabajador02  = new Trabajador("Camila", "Carrion",  19, 35.500);
let trabajador03  = new Trabajador("Dariel", "Cruz",  25, 250.000);

let jefe  = new  Jefe("Andrius", "Apellido", 18);

jefe.trabajador.push( trabajor01, trabajador02, trabajador03);

trabajor01.saludar(); //herencia de Persona 