export function generarReportes(estudiantes) {
    return {
        listadoEstudiantes: estudiantes.map(est => ({ nombre: est.nombre, area: est.area })),
        promedioPorEstudiante: estudiantes.map(est => {
            const calificaciones = Object.values(est.calificaciones);
            const promedio = calificaciones.length ? calificaciones.reduce((a, b) => a + b, 0) / calificaciones.length : 0;
            return { nombre: est.nombre, promedio, area: est.area };
        }),
        promedioGeneralGrupo: (() => {
            const calificaciones = estudiantes.flatMap(est => Object.values(est.calificaciones));
            return calificaciones.length ? calificaciones.reduce((a, b) => a + b, 0) / calificaciones.length : 0;
        })()
    };
}