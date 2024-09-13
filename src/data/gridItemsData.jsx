import gaba from '././img/gabanimate.gif'
import pipo from '././img/grid-pipo.png'


export const gridItemsData = [
  {
    i: "1",
    title: "Full Stack Developer, buscando un nuevo desafío como junior developer. Siempre en modo aprendizaje y lista para colaborar en proyectos.",
    description: "",
    stack: [],
    imageUrl: gaba,
    links: {
      frontend: "",
      backend: "",
      deploy: "",
    },
    images: [
      {
        src: "/modal/1.gif",
        caption: "",
      },
      {
        src: "/modal/3.gif",
        caption: "Sección de detalles",
      },
      {
        src: "/modal/6.gif",
        caption: "",
      }
    ],
    extraLink: [
      {
        url: "#",
        title: "Linkedin",
      },
      {
        url: "#",
        title: "Github",
      },
      {
        url: "#",
        title: "Email",
      }
    ],
    tags: ["Personal"],
    styleClass: "profile",
    w: 1,
    h: 2
  },
  {
    i: "2",
    title: "Wemeet",
    imageUrl: pipo,
    description: "Generador de reuniones grupales que facilita la coordinación de horarios entre participantes, optimizando la disponibilidad de todos los asistentes.",
    stack: [
      { name: "Flask", color: "#000000" },
      { name: "SQLite", color: "#0b425c" },
      { name: "Python", color: "#396d96" },
    ],
    links: {
      frontend: "",
      backend: "https://github.com/user/backend",
      deploy: "",
    },
    images: [
      {
        src: "/modal/01_pipo/01-pipo.png",
        caption: "Pantalla principal del proyecto",
      },
      {
        src: "/modal/3.gif",
        caption: "Sección de detalles",
      },
      {
        src: "/modal/6.gif",
        caption: "",
      }
    ],
    extraLink: [],
    tags: ["Backend"],
    styleClass: "hero-w",
    w: 2,
    h: 1,
  },
  {
    i: "3",
    title: "Tierlist",
    description: "Generador de listas estilo Tierlist, diseñado para clasificar y organizar elementos de manera personalizada según las preferencias del usuario.",
    stack: [
      { name: "Flask", color: "#000000" },
      { name: "SQLite", color: "#0b425c" },
      { name: "Python", color: "#396d96" },
    ],
    links: {
      frontend: "https://github.com/user/frontend",
      backend: "https://github.com/user/backend",
      deploy: "https://deploy.example.com",
    },
    images: [
      {
        src: "/modal/1.gif",
        caption: "Pantalla principal del proyecto",
      },
      {
        src: "/modal/3.gif",
        caption: "Sección de detalles",
      },
      {
        src: "/modal/6.gif",
        caption: "",
      }
    ],
    extraLink: [],
    tags: ["Frontend", "Backend"],
    w: 1,
    h: 1
  },
  {
    i: "4",
    title: "Pipo Web API",
    imageUrl: pipo,
    stack: [
      { name: "Leaflet", color: "#bbe469" },
      { name: "JavaScript", color: "#f0db4f" },
      { name: "React", color: "#00d8ff" },
      { name: "CSS3", color: "#2d53e5" },
      { name: "Booststrap", color: "#4c0bce" },
      { name: "Toastify", color: "#000000" },
      { name: "HTML5", color: "#e3552e" },
      { name: "JWT", color: "#fb1560" },
      { name: "Flask", color: "#000000" },
      { name: "Python", color: "#396d96" },
      { name: "Docker", color: "#1771d8" },
      { name: "PostgresSQL", color: "#3a6c94" },
    ],
    links: {
      frontend: "https://github.com/gabasaura/pipo-app-frontend",
      backend: "https://github.com/nguzm4n/pipo-app-backend",
      deploy: "https://pipo-app-frontend.onrender.com/",
    },
    images: [
      {
        src: "/modal/01_pipo/01-pipo.png",
        caption: "La Pipo App es una aplicación web desarrollada en equipo como proyecto final del Fullstack Developer Bootcamp de 4Geeks Academy. Es una API/REST cuyo MVP (Producto Mínimo Viable) permite a los usuarios registrados listar, localizar y rankear baños de uso público a través de un mapa interactivo.",
      },
      {
        src: "/modal/01_pipo/04-pipo.png",
        caption: "Un vistazo al Backend. Pipo también ofrece la posibilidad de dejar comentarios, calificar los baños y agregar nuevas ubicaciones. Es especialmente útil para turistas extranjeros que exploran la ciudad, ya que brinda una solución rápida y práctica para localizar servicios sanitarios mientras disfrutan de su visita. El mapa interactivo utiliza GPS para rastrear la ubicación del usuario, facilitando así la búsqueda de opciones cercanas a su posición actual.",
      },
      {
        src: "/modal/01_pipo/02-pipo.png",
        caption: "Aunque el proyecto es bastante ambicioso, este diagrama representa la primera etapa o MVP. En esta fase inicial, nos centramos en ofrecer las funcionalidades clave que permiten a los usuarios interactuar con la aplicación de manera eficiente, mientras continuamos desarrollando y expandiendo las características para futuras versiones.",
      },
      {
        src: "/modal/01_pipo/03-pipo.png",
        caption: "Utilizamos metodologías ágiles para la realización del proyecto, lo que nos permitió adaptar rápidamente los cambios. Para gestionar las historias de usuario y el flujo de trabajo, usamos el kanban de GitHub, lo que facilitó la organización y seguimiento de las tareas como equipo.",
      }
    ],
    extraLink: [],
    tags: ["Backend", "Frontend"],
    styleClass: "hero",
    w: 1,
    h: 2,
  },
  {
    i: "5",
    title: "Battleship",
    description: "Juego de Batalla Naval desarrollado para enfrentamientos jugador vs PC",
    stack: [
      { name: "JavaScript", color: "#f0db4f" },
      { name: "React", color: "#00d8ff" },
      { name: "CSS3", color: "#2d53e5" },
    ],
    links: {
      frontend: "https://github.com/user/frontend",
      backend: "",
      deploy: "https://deploy.example.com",
    },
    images: [
      {
        src: "/modal/1.gif",
        caption: "Pantalla principal del proyecto",
      },
      {
        src: "/modal/3.gif",
        caption: "Sección de detalles",
      },
      {
        src: "/modal/6.gif",
        caption: "",
      }
    ],
    extraLink: [],
    tags: ["Frontend"],
    w: 1,
    h: 1
  },
  {
    i: "6",
    title: "Storyboard",
    description: "Proyecto de Brainstorming para la creación de storyboards dinámicos, diseñado para facilitar la visualización de ideas y mejorar la narrativa al permitir desarmar y reorganizar la historia.",
    stack: [
      { name: "Flask", color: "#000000" },
      { name: "SQLite", color: "#0b425c" },
      { name: "Python", color: "#396d96" },
    ],
    links: {
      frontend: "",
      backend: "https://github.com/user/backend",
      deploy: "",
    },
    images: [
      {
        src: "/modal/1.gif",
        caption: "Pantalla principal del proyecto",
      },
      {
        src: "/modal/3.gif",
        caption: "Sección de detalles",
      },
      {
        src: "/modal/6.gif",
        caption: "",
      }
    ],
    extraLink: [],
    tags: ["Backend"],
    w: 1,
    h: 1
  },
  {
    i: "7",
    title: "Post-it Wall",
    description: "Listas de tareas pendientes en formato de bloques, similares a post-its, diseñadas para una visualización clara y una gestión eficiente de actividades.",
    stack: [
      { name: "JavaScript", color: "#f0db4f" },
      { name: "HTML5", color: "#e3552e" },
      { name: "CSS3", color: "#2d53e5" },
      { name: "React", color: "#00d8ff" },
      { name: "Toastify", color: "#000000" },
    ],
    links: {
      frontend: "https://github.com/user/frontend",
      backend: "",
      deploy: "https://deploy.example.com",
    },
    images: [
      {
        src: "/modal/1.gif",
        caption: "Pantalla principal del proyecto",
      },
      {
        src: "/modal/3.gif",
        caption: "Sección de detalles",
      },
      {
        src: "/modal/6.gif",
        caption: "",
      }
    ],
    extraLink: [],
    tags: ["Frontend"],
    w: 1,
    h: 1
  },
  {
    i: "8",
    title: "Playground: Códigos experimentales para pruebas pequeñas, destinados a aprender y documentar.",
    description: "",
    stack: [],
    links: {
      frontend: "",
      backend: "",
      deploy: "",
    },
    images: [
      {
        src: "/modal/1.gif",
        caption: "Pantalla principal del proyecto",
      },
      {
        src: "/modal/3.gif",
        caption: "Sección de detalles",
      },
      {
        src: "/modal/6.gif",
        caption: "",
      }
    ],
    extraLink: [
      {
        url: "#",
        title: "Playground",
      },
    ],
    styleClass: "personal",
    tags: ["Personal"],
    w: 1,
    h: 1
  },
  {
    i: "9",
    title: "Doodling: En mi otra vida, dibujo. Contenido no relacionado a programación.",
    description: "",
    stack: [],
    links: {
      frontend: "",
      backend: "",
      deploy: "",
    },
    images: [
      {
        src: "/modal/1.gif",
        caption: "Pantalla principal del proyecto",
      },
      {
        src: "/modal/3.gif",
        caption: "Sección de detalles",
      },
      {
        src: "/modal/6.gif",
        caption: "",
      }
    ],
    extraLink: [
      {
        url: "#",
        title: "Ilustraciones_ Artstation",
      },
      {
        url: "#",
        title: "Diseño_ Behance",
      },
      {
        url: "#",
        title: "Instragram_ Gabasaura",
      }
    ],
    styleClass: "personal",
    tags: ["Personal"],
    w: 1,
    h: 1
  },
];
