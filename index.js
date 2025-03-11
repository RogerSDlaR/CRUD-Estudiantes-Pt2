import { GestorEstudiantes } from "./Modulos/Estudiante.js";
import { generarReportes } from "./Modulos/Reportes.js";
import readlineSync from 'readline-sync';

const gestor = new GestorEstudiantes();

function mostrarMenu() {
    console.log("\n--- Gestión de Estudiantes ---");
    console.log("1. Agregar estudiante");
    console.log("2. Listar estudiantes");
    console.log("3. Buscar estudiante por ID o nombre");
    console.log("4. Generar reportes");
    console.log("5. Salir");
    return readlineSync.question("Seleccione una opción: ");
}

let opcion;
do {
    opcion = mostrarMenu();
    if (opcion === "1") {
        const nombre = readlineSync.question("Nombre: ");
        const edad = parseInt(readlineSync.question("Edad: "), 10);
        const area = readlineSync.question("Área de estudio: ");
        const calificaciones = {};
        let agregarOtra = "si";
        while (agregarOtra.toLowerCase() === "si") {
            const materia = readlineSync.question("Nombre de la materia: ");
            const calificacion = parseFloat(readlineSync.question("Calificación: "));
            calificaciones[materia] = calificacion;
            agregarOtra = readlineSync.question("¿Agregar otra materia? (si/no): ");
        }
        gestor.agregarEstudiante(nombre, edad, area, calificaciones);
    } else if (opcion === "2") {
        console.log(gestor.listarEstudiantes());
    } else if (opcion === "3") {
        const criterio = readlineSync.question("Ingrese ID o nombre: ");
        console.log(gestor.buscarEstudiante(criterio));
    } else if (opcion === "4") {
        console.log(generarReportes(gestor.obtenerEstudiantes()));
    }
} while (opcion !== "5");
