// Base de datos de PELÍCULAS para Cinemax
const baseDeDatos = [
    { 
        id: "P1", 
        titulo: "El abismo secreto", 
        poster: "https://www.themoviedb.org/t/p/w600_and_h900_face/cZJaa2ZOp3wiXXw0mqqtp3d326j.jpg", 
        bg: "https://image.tmdb.org/t/p/original/uBfAZuAsEmIQ66N2OTZ8ytLEV6.jpg", 
        video: "https://www.burstcloud.co/embed/b747167e31d4ccd34d5c5fadd32d1c9f737ef12869685343a96c9ccee9974492/her%20ella.mp4", 
        descripcion: "Dos agentes altamente entrenados se unen a la distancia...", 
        fecha: "2025", 
        tags: "Romance, Ciencia ficción",
        etiqueta: "EXCLUSIVA",
        coincidencia: "98% para ti",
        calidad: "HD"
    },
    { 
        id: "P2", 
        titulo: "Compañera perfecta", 
        poster: "https://www.themoviedb.org/t/p/w600_and_h900_face/m68uoULpxeDkmCetbhftXCgP1TZ.jpg", 
        bg: "https://image.tmdb.org/t/p/original/9p2tVEEWw1M92Pt63Vbq7EjBpvk.jpg", 
        video: "https://www.burstcloud.co/embed/1b72b0a9273e43f0f1f304d59d91943232442da6504940459eed6c0c5b0bc553/Companera%20perfecta.mp4", 
        descripcion: "La muerte de un multimillonario desencadena una cadena de acontecimientos para Iris y sus amigos durante un viaje de fin de semana a su propiedad junto al lago.", 
        fecha: "2025", 
        tags: "Terror, Ciencia ficción y Suspense",
        etiqueta: "ESTRENO",
        coincidencia: "80% para ti",
        calidad: "HD"
    },
	{ 
        id: "P3", 
        titulo: "Napoleón", 
        poster: "https://www.themoviedb.org/t/p/w600_and_h900_face/ytFOXyghxLzAM4KZyazDdEkM66q.jpg", 
        bg: "https://image.tmdb.org/t/p/original/33pMXav77ICRnceEBLhL8lXTywv.jpg", 
        video: "https://www.burstcloud.co/embed/ff55dabfd9262fee808e2f57f99ab58a2b7c83463444f88f9046df9ee5cf17b0/NAPOLEON.mp4", 
        descripcion: "Una mirada personal a los orígenes del líder militar francés y su rápido y despiadado ascenso a emperador.", 
        fecha: "2023", 
        tags: "Historia, Bélica y Romance",
        etiqueta: "ESTRENO",
        coincidencia: "63% para ti",
        calidad: "HD"
    },
	{ 
        id: "P4", 
        titulo: "Corazón Valiente", 
        poster: "https://www.themoviedb.org/t/p/w600_and_h900_face/6snCuOuKwWnATAOTTumAtRImuoo.jpg", 
        bg: "https://image.tmdb.org/t/p/original/8lBcqakI3F19NWkXdqE0M8W76b9.jpg", 
        video: "https://www.burstcloud.co/embed/5f9605a235e4a811d417790a769810725f0ce7dac06bdd27251fa0470f7dcacb/corazonvaliente.mp4", 
        descripcion: "Drama histórico que narra la vida de William Wallace, un héroe escocés del siglo XIII que lidera una rebelión contra el dominio inglés", 
        fecha: "1995 ", 
        tags: "Acción, Drama, Historia y Bélica",
        etiqueta: "ESTRENO",
        coincidencia: "79% para ti",
        calidad: "HD"
    },
	{ 
        id: "P5", 
        titulo: "Maze Runner: Correr o morir", 
        poster: "https://www.themoviedb.org/t/p/w600_and_h900_face/ode14q7WtDugFDp78fo9lCsmay9.jpg", 
        bg: "https://image.tmdb.org/t/p/original/l5ILIrAcBzja7nkKduTcKUoAAvP.jpg", 
        video: "https://www.burstcloud.co/embed/1e908ed1f88d74b9621f09a4f195c226c35ce6a02448ba22faa311d5efcc686b/Mazerunner%201.mp4", 
        descripcion: "Thomas se despierta en un ascensor sin recuerdos, solo su nombre. Al salir, encuentra un mundo extraño con jóvenes amnésicos, donde comienza una aventura que revela complejas realidades.", 
        fecha: "2014", 
        tags: "cción, Misterio,ficción y Suspense",
        etiqueta: "ESTRENO",
        coincidencia: "72% para ti",
        calidad: "HD"
    },
];