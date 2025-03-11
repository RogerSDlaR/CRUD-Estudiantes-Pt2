export function generarReportes(estudiantes) {
    const reportes = {};
    
    reportes.listadoEstudiantes = estudiantes.map(est => ({ nombre: est.nombre, area: est.area }));
    
    reportes.promediosEstudiantes = estudiantes.map(est => {
        const promedio = Object.values(est.calificaciones).reduce((sum, cal) => sum + cal, 0) / Object.values(est.calificaciones).length;
        return { nombre: est.nombre, promedio: promedio, area: est.area };
    });

    return reportes;
}
