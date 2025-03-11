export class GestorEstudiantes {
    constructor() {
        this.estudiantes = [];
        this.idActual = 1;
    }

    agregarEstudiante(nombre, edad, area, calificaciones) {
        this.estudiantes.push({
            id: this.idActual++,
            nombre,
            edad,
            area,
            calificaciones
        });
    }

    listarEstudiantes() {
        return this.estudiantes.map(est => ({ nombre: est.nombre, area: est.area }));
    }

    buscarEstudiante(criterio) {
        return this.estudiantes.find(est => est.id === Number(criterio) || est.nombre.toLowerCase() === criterio.toLowerCase()) || "Estudiante no encontrado";
    }

    obtenerEstudiantes() {
        return this.estudiantes;
    }
}