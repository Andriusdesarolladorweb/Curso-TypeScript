"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Jefe = exports.Trabajador = exports.Persona = void 0;
class Persona {
    constructor(nombre, apellido, edad) {
        this.nombre = nombre,
            this.apellido = apellido,
            this.edad = edad;
    }
    saludar() {
        console.log(`hola, me llamo ${this.nombre} ${this.apellido} mi eda es ${this.edad} años`);
    }
}
exports.Persona = Persona;
class Trabajador extends Persona {
    constructor(nombre, apellido, edad, sueldo) {
        super(nombre, apellido, edad);
        this.sueldo = sueldo;
    }
}
exports.Trabajador = Trabajador;
class Jefe extends Persona {
    constructor(nombre, apellido, edad) {
        super(nombre, apellido, edad);
        this.empleado = [];
    }
}
exports.Jefe = Jefe;
//# sourceMappingURL=persona.js.map