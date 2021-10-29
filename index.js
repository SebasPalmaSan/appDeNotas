const process = require('process')
const {argv} = process
const leer = require('./modules/leer')
const listar = require('./modules/listar')
const crear = require('./modules/crear')
const borrar = require('./modules/borrar')
let tareas = leer("./data/tareas.json")
listar(tareas)


const [node,file,action, identificador] = argv

let tareas = null
let resultado = null

switch (action) {
case "-l":
    tareas = leer("./data/tareas.json")
    listar(tareas)
    break;

    case "-c":
        tareas = leer("./data/tareas.json")
        listar(tareas.filter(tarea => tarea.completa))
        break;

        case "-i":
            tareas = leer("./data/tareas.json")
            listar(tareas.filter(tarea => !tarea.completa));
            break;

            case "-s":
                tareas = leer("./data/tareas.json")
                resultado = tareas.find(tarea => tarea.identificador == identificador)
                console.log(resultado ? resultado : "No se encontro ningun resultado");
                break;

                case "-a":
                   tareas = leer("./data/tareas.json")
                   resultado = crear(identificador, tareas, "./data/tareas.json")
                   break;

                   case "-b":
                    tareas = leer("./data/tareas.json")
                    resultado = borrar(identificador, tareas, "./data/tareas.json")
                    console.log(resultado);
                    break;


                   default:
                   console.log("No se reconocio la accion");

}