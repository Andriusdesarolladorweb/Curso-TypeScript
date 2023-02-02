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