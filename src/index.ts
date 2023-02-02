import { error } from "console";
import { type } from "os";
import { Interface } from "readline";
import { setCookie } from "cookies-utils";

var nombre: string  = "";
let email = "andriusrosa@gmail.com";
const Eda: number = 20;
const Desarollador: boolean = true

console.log("Hola," + nombre);
console.log(`¿Hola han sido tu vacion ${nombre}?`);
console.log(` El gmail de ${nombre} es  ${email} su eda es ${Eda} el es desarollador verdad? `);


//instanciacion mutiple de variables 
let a:string,b:number,c:boolean;

//Lista de cadena de texto
let listatarea: string[] = ["tarea1", "tarea2"]

//Enumerados
enum Estado  {
    "C",
    "I",
    "P"
}

let EstadoDeTarea: Estado = Estado.C;

//INTEVACES 

interface tarea {
    Nombre : String;
    Estado :Estado;
    Urgencia: number
}

let tarea1 : tarea = {
    Nombre: "Tarea 01",
    Estado: Estado.C,
    Urgencia: 10
}
 
type Producto = {
    precio : number,
    nombre : string,
    anio : number
}

let conche : Producto = {
    nombre : "Toyota",
    precio: 1500000,
    anio : 2015
   
}

//operadores ternarios
console.log(conche.anio < 2010 ? `Coche ${conche.nombre} es viejo` : `Coche ${conche.nombre} es NUevo`)

//Switch
switch (tarea1.Estado) {
    case Estado.C:
        console.log("La tarea esta completada")
        break;
        case Estado.I:
            console.log("La tarea no esta completada")
            break;

            case Estado.P:
                console.log("La tarea esta pediente de comprobarse")
                break;
        
    default:
        break;
}

// Bucles
let listatareaNueva : tarea[] = [

    {
        Nombre: "Matematica",
        Estado: Estado.C,
        Urgencia : 7
    },
    
    {
        Nombre: "Sociales",
        Estado: Estado.I,
        Urgencia : 0
    },
    
    {
        Nombre: "Naturales",
        Estado: Estado.C,
        Urgencia : 20
    }
]

//for clasico
for (let index = 0; index <listatareaNueva.length; index++) {
    const tarea = listatareaNueva[index];
    console.log(`${index} - ${tarea.Nombre}`)  
    
}

//forEach
listatareaNueva.forEach(
    (tarea: tarea, index: number) => {
          console.log(`${index} - ${tarea.Nombre}`)  
    }
);

//while  miestras que 
while(tarea1.Estado !== Estado.C){
    tarea1.Urgencia ++;
    if(tarea1.Urgencia == 20){
        tarea1.Estado = Estado.C;
        break;
    }else{
        tarea1.Urgencia ++;
    }
    
}
do {
    tarea1.Urgencia ++;
    tarea1.Estado = Estado.C;
}while(tarea1.Estado !== Estado.C);

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

  
