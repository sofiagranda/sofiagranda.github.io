// Contenido adicional 
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');

    menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
    });
});
// Datos de ejemplo de jugadores y estadísticas
const jugadoresPorEquipo = {
    "Equipo 1": [
        { jugador: "Jugador 1", partidos_jugados: 0, goles: 5, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 2", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 3", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 4", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 5", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 6", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 7", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 8", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 9", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 10", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 11", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 12", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 13", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 14", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 15", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 16", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 }
    ],
    "Corinthzonas": [
        { jugador: "Jugador 1", partidos_jugados: 0, goles: 10, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 2", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 3", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 4", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 5", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 6", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 7", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 8", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 9", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 10", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 11", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 12", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 13", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 14", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 15", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 16", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 }
    ],
    "Equipo 3": [
        { jugador: "Jugador 1", partidos_jugados: 0, goles: 3, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 2", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 3", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 4", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 5", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 6", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 7", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 8", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 9", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 10", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 11", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 12", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 13", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 14", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 15", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 16", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 }
    ],
    "Equipo 4": [
        { jugador: "Jugador 1", partidos_jugados: 0, goles: 2, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 2", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 3", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 4", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 5", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 6", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 7", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 8", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 9", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 10", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 11", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 12", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 13", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 14", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 15", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 16", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 }
    ],
    "Equipo 5": [
        { jugador: "Jugador 1", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 2", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 3", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 4", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 5", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 6", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 7", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 8", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 9", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 10", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 11", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 12", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 13", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 14", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 15", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 16", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 }
    ],
    "Equipo 6": [
        { jugador: "Jugador 1", partidos_jugados: 0, goles: 4, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 2", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 3", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 4", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 5", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 6", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 7", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 8", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 9", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 10", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 11", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 12", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 13", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 14", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 15", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 16", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 }
    ],
    "Equipo 7": [
        { jugador: "Jugador 1", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 2", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 3", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 4", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 5", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 6", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 7", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 8", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 9", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 10", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 11", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 12", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 13", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 14", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 15", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 16", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 }
    ],
    "Equipo 8": [
        { jugador: "Jugador 1", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 2", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 3", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 4", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 5", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 6", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 7", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 8", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 9", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 10", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 11", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 12", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 13", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 14", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 15", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 16", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 }
    ],
    "Equipo 9": [
        { jugador: "Jugador 1", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 2", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 3", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 4", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 5", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 6", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 7", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 8", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 9", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 10", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 11", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 12", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 13", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 14", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 15", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 16", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 }
    ],
    "Equipo 10": [
        { jugador: "Jugador 1", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 2", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 3", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 4", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 5", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 6", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 7", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 8", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 9", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 10", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 11", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 12", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 13", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 14", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 15", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 16", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 }
    ],
    "Equipo 11": [
        { jugador: "Jugador 1", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 2", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 3", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 4", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 5", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 6", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 7", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 8", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 9", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 10", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 11", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 12", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 13", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 14", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 15", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 16", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 }
    ],
    "Equipo 12": [
        { jugador: "Nicolas Paredes", partidos_jugados: 0, goles: 9, amarillas: 0, rojas: 0 },
        { jugador: "David Paredes", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Ricardo Paredes", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Alexis Briones", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Cristopher Olmedo", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Cristhian Oviedo", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Diego Antamba", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Diego Yanza", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Joordy Villamar", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Lenin Mateo", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Mateo Apellido", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Paul Vaca", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Antony Cazagiglia", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Alan Salazar", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Alejandro Guachamin", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Lucas Quiroz", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 }
    ],
    "Equipo 13": [
        { jugador: "Nicolas Paredes", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "David Paredes", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Ricardo Paredes", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Alexis Briones", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Cristopher Olmedo", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Cristhian Oviedo", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Diego Antamba", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Diego Yanza", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Joordy Villamar", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Lenin Mateo", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Mateo Apellido", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Paul Vaca", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Antony Cazagiglia", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Alan Salazar", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Alejandro Guachamin", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Lucas Quiroz", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 }
    ],
    "Equipo 14": [
        { jugador: "Jugador 1", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 2", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 3", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 4", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 5", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 6", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 7", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 8", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 9", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 10", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 11", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 12", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 13", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 14", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 15", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 16", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 }
    ],
    "Equipo 15": [
        { jugador: "Jugador 1", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 2", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 3", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 4", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 5", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 6", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 7", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 8", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 9", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 10", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 11", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 12", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 13", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 14", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 15", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 16", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 }
    ],
    "Equipo 16": [
        { jugador: "Jugador 1", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 2", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 3", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 4", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 5", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 6", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 7", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 8", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 9", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 10", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 11", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 12", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 13", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 14", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 15", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 },
        { jugador: "Jugador 16", partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 }
    ],
    // Añadir más equipos y jugadores según sea necesario
};

// Datos de ejemplo
const equipos = [
    { nombre: "Equipo 1", imagen: "images/america.png" },
    { nombre: "Corinthzonas", imagen: "images/arsenal.png" },
    { nombre: "Equipo 3", imagen: "images/astonbiela.png" },
    { nombre: "Equipo 4", imagen: "images/CDPH.png" },
    { nombre: "Equipo 5", imagen: "images/dream_team.png" },
    { nombre: "Equipo 6", imagen: "images/juventudph.png" },
    { nombre: "Equipo 7", imagen: "images/piamonte.png" },
    { nombre: "Equipo 8", imagen: "images/princejr.png" },
    { nombre: "Equipo 9", imagen: "images/soccer machine.png" },
    { nombre: "Equipo 10", imagen: "images/the_walls.png" },
    { nombre: "Equipo 11", imagen: "images/los_de_solanda.png" },
    { nombre: "Equipo 12", imagen: "images/corinthzonas.png" },
    { nombre: "Equipo 13", imagen: "images/los_de_solanda.png" },
    { nombre: "Equipo 14", imagen: "images/corinthzonas.png" },
    { nombre: "Equipo 15", imagen: "images/los_de_solanda.png" },
    { nombre: "Equipo 16", imagen: "images/corinthzonas.png" },
];

// Renderizar equipos
function renderEquipos() {
    const container = document.getElementById("lista-equipos");
    equipos.forEach(equipo => {
        const equipoCard = document.createElement("div");
        equipoCard.classList.add("equipo-card");
        equipoCard.innerHTML = `
            <img src="${equipo.imagen}" alt="Imagen de ${equipo.nombre}">
            <h3>${equipo.nombre}</h3>
        `;
        equipoCard.addEventListener("click", () =>{
            mostrarEstadisticas(equipo.nombre);
            mostrarEstadisticas_equipo(equipo.nombre);
        });
        container.appendChild(equipoCard);
    });
};

// Mostrar estadísticas de jugadores
function mostrarEstadisticas(equipoNombre) {
    const container = document.getElementById("estadisticas1");
    const tabla = document.getElementById("tabla-estadisticas").getElementsByTagName('tbody')[0];
    
    // Limpiar tabla
    tabla.innerHTML = "";
    
    const jugadores = jugadoresPorEquipo[equipoNombre];
    
    if (jugadores) {
        jugadores.forEach(jugador => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${jugador.jugador}</td>
                <td style= "text-transform: uppercase">${equipoNombre}</td>
                <td>${jugador.partidos_jugados}</td>
                <td>${jugador.goles}</td>
                <td>${jugador.amarillas}</td>
                <td>${jugador.rojas}</td>
            `;
            tabla.appendChild(row);
        });
        container.style.display = "block";
    } else {
        alert("No se encontraron estadísticas para este equipo.");
    }
};

const equipo = {
    "Equipo 1": [
        { partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 }
    ],
    "Corinthzonas": [
        { partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 }
    ],
    "Equipo 3": [
        { partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 }
    ],
    "Equipo 4": [
        { partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 }
    ],
    "Equipo 5": [
        { partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 }
    ],
    "Equipo 6": [
        { partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 }
    ],
    "Equipo 7": [
        { partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 }
    ],
    "Equipo 8": [
        { partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 }
    ],
    "Equipo 9": [
        { partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 }
    ],
    "Equipo 10": [
        { partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 }
    ],
    "Equipo 11": [
        { partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 }
    ],
    "Equipo 12": [
        { partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 }
    ],
    "Equipo 13": [
        { partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 }
    ],
    "Equipo 14": [
        { partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 }
    ],
    "Equipo 15": [
        { partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 }
    ],
    "Equipo 16": [
        { partidos_jugados: 0, goles: 0, amarillas: 0, rojas: 0 }
    ],
    // Agregar más equipos según sea necesario
};
// Mostrar estadísticas de equipo
function inicializarEstadisticas() {
    const tabla = document.getElementById("tabla-estadisticas-equipo").getElementsByTagName("tbody")[0];

    // Limpiar tabla
    tabla.innerHTML = "";

    // Iterar sobre los equipos y llenar la tabla
    for (const equipoNombre in equipo) {
        const jugadores = equipo[equipoNombre];

        jugadores.forEach(jugador => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${equipoNombre}</td>
                <td>${jugador.partidos_jugados}</td>
                <td>${jugador.goles}</td>
                <td>${jugador.amarillas}</td>
                <td>${jugador.rojas}</td>
            `;
            tabla.appendChild(row);
        });
    }
}

function mostrarEstadisticas_equipo(equipoNombre) {
    const container = document.getElementById("estadisticas-jugadores");
    const tabla = document.getElementById("tabla-estadisticas-equipo").getElementsByTagName("tbody")[0];

    // Limpiar tabla
    tabla.innerHTML = "";

    // Obtener los datos del equipo seleccionado
    const equipoSeleccionado = jugadoresPorEquipo[equipoNombre];

    if (equipoSeleccionado) {
        let partidosJugados = 0;
        let goles = 0;
        let amarillas = 0;
        let rojas = 0;

        // Calcular las estadísticas sumando los valores de cada jugador
        equipoSeleccionado.forEach(jugador => {
            partidosJugados = Math.max(partidosJugados, jugador.partidos_jugados);
            goles += jugador.goles;
            amarillas += jugador.amarillas;
            rojas += jugador.rojas;
        });

        // Agregar fila con estadísticas del equipo
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${equipoNombre}</td>
            <td>${partidosJugados}</td>
            <td>${goles}</td>
            <td>${amarillas}</td>
            <td>${rojas}</td>
        `;
        tabla.appendChild(row);

        // Mostrar las estadísticas del equipo
        container.style.display = "block";
    } else {
        alert("No se encontraron estadísticas para este equipo.");
    }
}
// cerrar la ventana de estadisticas
document.getElementById("cerrar-estadisticas").addEventListener("click", function() {
    document.getElementById("estadisticas1").style.display = "none";
});

// Inicialización
document.addEventListener("DOMContentLoaded", () => {
    renderEquipos();
    inicializarEstadisticas();
});
// Datos de ejemplo (estos datos vendrían de tu API o base de datos)
let posiciones = [
    { equipo: "Equipo 1", logo: "images/los_de_solanda.png", juegos: 0, ganados: 0, empatados: 0, perdidos: 0, golesAFavor: 0, golesEnContra: 0, puntos: 0 },
    { equipo: "Corinthzonas", logo: "images/corinthzonas.png", juegos: 0, ganados: 0, empatados: 0, perdidos: 0, golesAFavor: 0, golesEnContra: 0, puntos: 0 },
    { equipo: "Equipo 3", logo: "images/los_de_solanda.png", juegos: 0, ganados: 0, empatados: 0, perdidos: 0, golesAFavor: 0, golesEnContra: 0, puntos: 0 },
    { equipo: "Equipo 4", logo: "images/corinthzonas.png", juegos: 0, ganados: 0, empatados: 0, perdidos: 0, golesAFavor: 0, golesEnContra: 0, puntos: 0 },
    { equipo: "Equipo 5", logo: "images/los_de_solanda.png", juegos: 0, ganados: 0, empatados: 0, perdidos: 0, golesAFavor: 0, golesEnContra: 0, puntos: 0 },
    { equipo: "Equipo 6", logo: "images/corinthzonas.png", juegos: 0, ganados: 0, empatados: 0, perdidos: 0, golesAFavor: 0, golesEnContra: 0, puntos: 0 },
    { equipo: "Equipo 8", logo: "images/los_de_solanda.png", juegos: 0, ganados: 0, empatados: 0, perdidos: 0, golesAFavor: 0, golesEnContra: 0, puntos: 0 },
    { equipo: "Equipo 7", logo: "images/corinthzonas.png", juegos: 0, ganados: 0, empatados: 0, perdidos: 0, golesAFavor: 0, golesEnContra: 0, puntos: 0 },
    { equipo: "Equipo 9", logo: "images/los_de_solanda.png", juegos: 0, ganados: 0, empatados: 0, perdidos: 0, golesAFavor: 0, golesEnContra: 0, puntos: 0 },
    { equipo: "Equipo 10", logo: "images/corinthzonas.png", juegos: 0, ganados: 0, empatados: 0, perdidos: 0, golesAFavor: 0, golesEnContra: 0, puntos: 0 },
    { equipo: "Equipo 11", logo: "images/los_de_solanda.png", juegos: 0, ganados: 0, empatados: 0, perdidos: 0, golesAFavor: 0, golesEnContra: 0, puntos: 0 },
    { equipo: "Equipo 12", logo: "images/corinthzonas.png", juegos: 0, ganados: 0, empatados: 0, perdidos: 0, golesAFavor: 0, golesEnContra: 0, puntos: 0 },
    { equipo: "Equipo 13", logo: "images/los_de_solanda.png", juegos: 0, ganados: 0, empatados: 0, perdidos: 0, golesAFavor: 0, golesEnContra: 0, puntos: 0 },
    { equipo: "Equipo 14", logo: "images/corinthzonas.png", juegos: 0, ganados: 0, empatados: 0, perdidos: 0, golesAFavor: 0, golesEnContra: 0, puntos: 0 },
    { equipo: "Equipo 15", logo: "images/los_de_solanda.png", juegos: 0, ganados: 0, empatados: 0, perdidos: 0, golesAFavor: 0, golesEnContra: 0, puntos: 0 },
    { equipo: "Equipo 16", logo: "images/corinthzonas.png", juegos: 0, ganados: 0, empatados: 0, perdidos: 0, golesAFavor: 0, golesEnContra: 0, puntos: 0 },
];

posiciones.forEach((equipo) => {
    equipo.puntos = equipo.ganados * 3 + equipo.empatados * 1 + equipo.perdidos * 0;
    equipo.partidosJugados = equipo.ganados + equipo.empatados + equipo.perdidos;
    equipo.diferenciaGoles = equipo.golesAFavor - equipo.golesEnContra;
});

// Ordenar equipos por puntos y diferencia de goles
posiciones.sort((a, b) => {
    if (b.puntos !== a.puntos) return b.puntos - a.puntos; // Ordenar por puntos
    return b.diferenciaGoles - a.diferenciaGoles;          // Desempatar por diferencia de goles
});

// Mostrar tabla de los primeros 4 equipos
function mostrarTop4() {
    const tabla = document.getElementById("tablaPosiciones").querySelector("tbody");
    tabla.innerHTML = ""; // Limpiar tabla
    posiciones.slice(0, 4).forEach((equipo, index) => {
        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${index + 1}</td>
            <td>
                <img src="${equipo.logo}" style="width:50px; height:50px; vertical-align:middle;">
            </td>
            <td>${equipo.puntos}</td>
            <td>${equipo.diferenciaGoles}</td>
        `;
        tabla.appendChild(fila);
    });
}

// Mostrar tabla completa
function mostrarTodaLaTabla() {
    const contenedor = document.getElementById("tablaCompleta");
    const tablaCompleta = document.getElementById("tablaCompletaPosiciones").querySelector("tbody");
    tablaCompleta.innerHTML = ""; // Limpiar tabla

    posiciones.forEach((equipo, index) => {
        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${index + 1}</td>
            <td>
                <img src="${equipo.logo}" alt="${equipo.equipo}" style="width:40px; height:40px; vertical-align:middle;">
            </td>
            <td>${equipo.equipo}</td>
            <td>${equipo.partidosJugados}</td>
            <td>${equipo.ganados}</td>
            <td>${equipo.empatados}</td>
            <td>${equipo.perdidos}</td>
            <td>${equipo.golesAFavor}</td>
            <td>${equipo.golesEnContra}</td>
            <td>${equipo.diferenciaGoles}</td>
            <td>${equipo.puntos}</td>
        `;
        tablaCompleta.appendChild(fila);
    });

    contenedor.style.display = "block"; // Mostrar tabla completa
}

document.getElementById("cerrar-tabla").addEventListener("click", function() {
    document.getElementById("tablaCompleta").style.display = "none";
});

// Inicializar tabla top 4
mostrarTop4();

function obtenerTopGoleadores(jugadoresPorEquipo, cantidad) {
    // Crear una lista de todos los jugadores
    let jugadores = [];

    // Iterar sobre cada equipo y agregar los jugadores a la lista
    for (const equipo in jugadoresPorEquipo) {
        jugadoresPorEquipo[equipo].forEach(jugador => {
            jugadores.push({
                nombre: jugador.jugador,
                equipo: equipo,
                goles: jugador.goles
            });
        });
    }

    // Ordenar a los jugadores por goles de mayor a menor
    jugadores.sort((a, b) => b.goles - a.goles);

    // Devolver los primeros N goleadores
    return jugadores.slice(0, cantidad);
}

// Función para actualizar la tabla de goleadores en el HTML
function actualizarTablaGoleadores() {
    const tabla = document.getElementById("tablaGoleadores").getElementsByTagName('tbody')[0];
    const topGoleadores = obtenerTopGoleadores(jugadoresPorEquipo, 5);

    // Limpiar cualquier contenido anterior
    tabla.innerHTML = '';

    // Insertar las filas de los goleadores en la tabla
    topGoleadores.forEach((jugador, index) => {
        const fila = tabla.insertRow();
        fila.innerHTML = `
            <td>${index + 1}</td>
            <td>${jugador.nombre}</td>
            <td>${jugador.equipo}</td>
            <td>${jugador.goles}</td>
        `;
    });
}

// Referencias a los elementos del DOM
const tablaCompletaGoleadores = document.getElementById('tablaCompleta-Goleadores');
const cerrarTablaGoleadores = document.getElementById('cerrar-tabla-goleadores');
const tbodyCompletaGoleadores = document.querySelector('#tabla-Completa-Goleadores tbody');

// Función para mostrar los 10 goleadores
function mostrarTop15Goleadores() {
    // Limpiar el tbody existente
    tbodyCompletaGoleadores.innerHTML = '';

    // Crear una lista de todos los jugadores y ordenar por goles
    const jugadores = [];
    for (const equipo in jugadoresPorEquipo) {
        jugadores.push(...jugadoresPorEquipo[equipo]);
    }
    const goleadoresOrdenados = jugadores
        .sort((a, b) => b.goles - a.goles) // Ordenar por goles descendente
        .slice(0, 10); // Seleccionar los primeros 10 jugadores

    // Generar filas para los 10 goleadores
    goleadoresOrdenados.forEach((jugador, index) => {
        const equipoNombre = Object.keys(jugadoresPorEquipo).find(equipo =>
            jugadoresPorEquipo[equipo].includes(jugador)
        );
        const equipoData = equipos.find(equipo => equipo.nombre === equipoNombre); // Buscar el equipo en `equipos`

        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${index + 1}</td>
            <td>${jugador.jugador}</td>
            <td>${equipoNombre}</td>
            <td><img src="${equipoData?.imagen || ''}" alt="Logo ${equipoNombre}" style="width: 40px; height: 40px; object-fit: contain; border-radius: 5px;"></td>
            <td>${jugador.goles}</td>
        `;
        tbodyCompletaGoleadores.appendChild(fila);
    });

    // Mostrar la tabla completa
    tablaCompletaGoleadores.style.display = 'block';
}

// Evento para cerrar la tabla
cerrarTablaGoleadores.addEventListener('click', () => {
    tablaCompletaGoleadores.style.display = 'none';
});

window.onload = function() {
    actualizarTablaGoleadores();
};
