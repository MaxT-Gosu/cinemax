// Base de datos de PELÍCULAS para Cinemax
const baseDeDatos = [
    { 
        id: "P1", 
        titulo: "El abismo secreto", 
        poster: "https://www.themoviedb.org/t/p/w600_and_h900_face/cZJaa2ZOp3wiXXw0mqqtp3d326j.jpg", 
        bg: "https://image.tmdb.org/t/p/original/uBfAZuAsEmIQ66N2OTZ8ytLEV6.jpg", 
        video: "https://www.burstcloud.co/embed/b747167e31d4ccd34d5c5fadd32d1c9f737ef12869685343a96c9ccee9974492/her%20ella.mp4", 
        descripcion: "Dos agentes altamente entrenados se unen a la distancia tras ser enviados a proteger bordes opuestos de un abismo misterioso. Cuando la maldad emerge de él, tienen que trabajar juntos para sobrevivir a lo que yace dentro del abismo.", 
        fecha: "2025", 
        tags: "Romance, Ciencia ficción y Suspense",
        etiqueta: "EXCLUSIVA", // La cintilla roja arriba
        coincidencia: "98% para ti", // <-- Lo que querías recuperar
        calidad: "HD" // <-- El cuadrito de calidad
    },
    /* Para agregar otra película:
    1. Copia desde la llave { hasta la llave }
    2. Pon una coma después de la última llave
    3. Pega y cambia los datos
    */
];