"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cookies_utils_1 = require("cookies-utils");
const Curso_1 = require("./models/Curso");
const Estudiantes_1 = require("./models/Estudiantes");
const Cursos_mok_1 = require("./mock/Cursos.mok");
const persona_1 = require("./persona");
// Funciones 
/*

function DespedirPersona( nombre : string){
    return nombre
}

DespedirPersona("Andrius")

*/
function mutipleParams(...nombre) {
    nombre.forEach((nombre) => {
        console.log(nombre);
    });
    const Lista = ["Andrius", "Diorkys"];
    mutipleParams(...Lista);
}
let EmpleadoAndrius = {
    nombre: "Carla",
    eda: 20
};
const mostrarEmpleado = (empleado) => `${empleado.nombre} tiene ${empleado.eda} años`;
mostrarEmpleado(EmpleadoAndrius);
const datosEmpleado = (empleado) => {
    if (empleado.eda > 70) {
        return `Empleado ${empleado.nombre} esta en edad de jubilacion`;
    }
    else {
        return `Empleado ${empleado.nombre} esta en edad laboral `;
    }
};
datosEmpleado(EmpleadoAndrius);
const ObtenerSalario = (empleado, cobrar) => {
    if (empleado.eda > 70) {
        return;
    }
    else {
        cobrar;
    }
};
const CobrarEmpleado = (empleado) => {
    console.log(`${empleado.nombre} cobra su salario`);
};
ObtenerSalario(EmpleadoAndrius, () => 'CobrarEmpleado');
//Async funtions
function ejemploAsync() {
    return __awaiter(this, void 0, void 0, function* () {
        yield console.log("Tarea completada andes de seguir con la secuencia de instrucciones");
        console.log("Tarea completada");
        return "Completado";
    });
}
ejemploAsync()
    .then((respuesta) => {
    console.log("Repuesta", respuesta);
}).catch((error) => {
    console.log("ha habido un error", error);
}).finally(() => "Todo ha terminado");
//Generators
function* ejemploGenerators() {
    let index = 0;
    while (index < 5) {
        yield index++;
    }
}
// guardamos la funcion 
let generadora = ejemploGenerators();
//acedemos a los valores 
console.log(generadora.next().value);
// Worker
function* wother(valor) {
    yield valor; //emitimos del valor iniciar
    yield* Worker(valor); // llamos las emesiones 
    yield valor + 4;
}
function* Worker(valor) {
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
function mostrarError(error) {
    console.log("un error", error);
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
    name: "Usuario",
    value: "Andrius",
    expires: new Date(2099, 10, 1),
    path: "/", // optional string,
};
// seteamos la cookies
(0, cookies_utils_1.setCookie)(cookieOptions);
// ** Clases
//creamos un curso 
/*
const cursoTs = new Curso("Ts", 15);
const cursoJs = new Curso("Js", 15);

const listacurso: Curso[] = [];

listacurso.push(cursoTs, cursoJs);
*/
//Usamos el mock
const listacurso = Cursos_mok_1.Lista_Cursos;
const Andrius = new Estudiantes_1.Estudiantes("Andrius", listacurso, "San Jose");
console.log(`${Andrius.nombre}  estudia:`);
//Iteramos por cada unos de ellos
Andrius.cursos.forEach((Curso) => {
    console.log(`- ${Curso.nombre} (${Curso.horas})`);
});
const cursoAg = new Curso_1.Curso("Angular", 25);
Andrius.cursos.push(cursoAg); //añadimos
//Cinaocer horas estudiantes 
Andrius.horasestudiadas;
Andrius.Id_estudiantes;
// saber la instacia de u objeto/variable 
// -Typeof
// -Instanceof
let fechaNacimiento = new Date(2005, 1, 2);
if (fechaNacimiento instanceof Date) {
    console.log("es una fecha");
}
if (Andrius instanceof Estudiantes_1.Estudiantes) {
    console.log("es un estudiante");
}
//herencia  y polimorfismo
let trabajor01 = new persona_1.Trabajador("Diorkys", "Cabrera", 18, 25.000);
let trabajador02 = new persona_1.Trabajador("Camila", "Carrion", 19, 35.500);
let trabajador03 = new persona_1.Trabajador("Dariel", "Cruz", 25, 250.000);
let jefe = new persona_1.Jefe("Andrius", "Apellido", 18);
jefe.empleado.push(trabajor01, trabajador02, trabajador03);
trabajor01.saludar(); //herencia de Persona 
/*
jefe.empleado.forEach((Trabajador: TR) => {
   Trabajador.saludar();
});
*/
// use de intefaces
let programar = {
    titulo: "Programar en TS",
    descripcion: "Practicar con Ts",
    completada: false,
    resume: function () {
        return `${this.titulo} - ${this.completada}`;
    }
};
console.log(programar.resume());
//# sourceMappingURL=Clases%20y%20Objetos.js.map