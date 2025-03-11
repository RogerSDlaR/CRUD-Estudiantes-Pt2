export class GestorEstudiantes {
    constructor() {
        this.estudiantes = [];
        this.idCounter = 1;
    }

    agregarEstudiante(nombre, edad, area, calificaciones) {
        const estudiante = {
            id: this.idCounter++,
            nombre,
            edad,
            area,
            calificaciones
        };
        this.estudiantes.push(estudiante);
    }

    listarEstudiantes() {
        return this.estudiantes.map(est => ({
            nombre: est.nombre,
            area: est.area
        }));
    }

    buscarEstudiante(criterio) {
        return this.estudiantes.find(
            est => est.id === parseInt(criterio) || est.nombre.toLowerCase() === criterio.toLowerCase()
        );
    }

    obtenerEstudiantes() {
        return this.estudiantes;
    }
}
