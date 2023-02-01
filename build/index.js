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
var nombre = "";
let email = "andriusrosa@gmail.com";
const Eda = 20;
const Desarollador = true;
console.log("Hola," + nombre);
console.log(`¿Hola han sido tu vacion ${nombre}?`);
console.log(` El gmail de ${nombre} es  ${email} su eda es ${Eda} el es desarollador verdad? `);
//instanciacion mutiple de variables 
let a, b, c;
//Lista de cadena de texto
let listatarea = ["tarea1", "tarea2"];
//Enumerados
var Estado;
(function (Estado) {
    Estado[Estado["C"] = 0] = "C";
    Estado[Estado["I"] = 1] = "I";
    Estado[Estado["P"] = 2] = "P";
})(Estado || (Estado = {}));
let EstadoDeTarea = Estado.C;
let tarea1 = {
    Nombre: "Tarea 01",
    Estado: Estado.C,
    Urgencia: 10
};
let conche = {
    nombre: "Toyota",
    precio: 1500000,
    anio: 2015
};
//operadores ternarios
console.log(conche.anio < 2010 ? `Coche ${conche.nombre} es viejo` : `Coche ${conche.nombre} es NUevo`);
//Switch
switch (tarea1.Estado) {
    case Estado.C:
        console.log("La tarea esta completada");
        break;
    case Estado.I:
        console.log("La tarea no esta completada");
        break;
    case Estado.P:
        console.log("La tarea esta pediente de comprobarse");
        break;
    default:
        break;
}
// Bucles
let listatareaNueva = [
    {
        Nombre: "Matematica",
        Estado: Estado.C,
        Urgencia: 7
    },
    {
        Nombre: "Sociales",
        Estado: Estado.I,
        Urgencia: 0
    },
    {
        Nombre: "Naturales",
        Estado: Estado.C,
        Urgencia: 20
    }
];
//for clasico
for (let index = 0; index < listatareaNueva.length; index++) {
    const tarea = listatareaNueva[index];
    console.log(`${index} - ${tarea.Nombre}`);
}
//forEach
listatareaNueva.forEach((tarea, index) => {
    console.log(`${index} - ${tarea.Nombre}`);
});
//while  miestras que 
while (tarea1.Estado !== Estado.C) {
    tarea1.Urgencia++;
    if (tarea1.Urgencia == 20) {
        tarea1.Estado = Estado.C;
        break;
    }
    else {
        tarea1.Urgencia++;
    }
}
do {
    tarea1.Urgencia++;
    tarea1.Estado = Estado.C;
} while (tarea1.Estado !== Estado.C);
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
