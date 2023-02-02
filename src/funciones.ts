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
