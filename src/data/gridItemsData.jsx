import gaba from '././img/gabanimate.gif'
import pipo from '././img/grid-pipo.png'


export const gridItemsData = [
  {
    i: "1",
    title: "Hola, soy Gaba, Full Stack Developer, motivada por el aprendizaje continuo y por contribuir a proyectos interesantes.",
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
        src: "/modal/00_profile/09-profile.png",
        caption: "Soy diseñadora gráfica e ilustradora de profesión, con estudios en artes visuales y multimediales. Aquí he recopilado proyectos en desarrollo web y programación más recientes.",
      },
      {
        src: "/modal/00_profile/05-profile.png",
        caption: "Finalización de estudios en 4Geeks Academy, donde se profundizó en lenguajes como JavaScript y Python, cubriendo el desarrollo de APIs desde el backend hasta el frontend.",
      },
      {
        src: "/modal/00_profile/06-profile.png",
        caption: "Primer lugar en CodeJam 1.0.0-SS de PEC de Equifax, Julio 2024.",
      },
      {
        src: "/modal/00_profile/07-profile.png",
        caption: "Desarrollo con HTML5, CSS3, jQuery y JavaScript. Integración de WordPress con conocimientos básicos en PHP.",
      },
      {
        src: "/modal/00_profile/08-profile.png",
        caption: "Diseño web, maquetación y diagramación de contenido usando ActionScript 2, HTML y JavaScript. Uso de Dreamweaver, Fireworks y Flash. Manejo de softwares Adobe como Illustrator y Photoshop.",
      },
      {
        src: "/modal/00_profile/01-profile.png",
        caption: "Desde pequeña, siempre me atrajeron la ilustración y las historias. Leía todo lo que encontraba a mi alcance: mangas japoneses, cómics y novelas gráficas. Esta pasión por lo visual me llevó a estudiar diseño gráfico, donde aprendí sobre la relación entre el usuario y el producto, además de dominar herramientas gráficas y teorías de diagramación. Al cursar arte, profundicé en composición, color, formas y dibujo, lo que amplió y enriqueció mi visión creativa.",
      },
      {
        src: "/modal/00_profile/02-profile.png",
        caption: "El computador siempre fue un compañero cercano, y lo extrañaba mientras estudiaba artes visuales. Esta necesidad de volver a lo digital me llevó a cambiar a multimediales, donde pude combinar mi amor por las artes plásticas con la programación. Aquí descubrí un nuevo camino que me permitió integrar la creatividad visual con la lógica del código. Entonces comencé dedicar más tiempo a la programación, viendo en ella un terreno fértil para seguir desarrollando.",
      },
      {
        src: "/modal/00_profile/03-profile.png",
        caption: "Desarrollar una API, para mí, es como contar una historia. Es necesario pensar en el usuario, estructurar cada paso, y los lenguajes de programación como herramientas para construir la mejor experiencia posible. Programar me permite resolver problemas, enfrentar desafíos constantes y aplicar tanto mi lógica como mi creatividad en cada proyecto.",
      },
      {
        src: "/modal/00_profile/04-profile.png",
        caption: "Lo que más disfruto de la programación es la posibilidad de explorar soluciones diferentes, investigar nuevas herramientas y aplicarlas sin miedo al fallo. Siento que todo lo que he aprendido hasta ahora se retroalimenta muchísimo de la programación, y a su vez, la lógica de programación potencia mi capacidad para enfrentar cada nuevo desafío con una perspectiva enriquecida.",
      },
    ],
    extraLink: [
      {
        url: "https://www.linkedin.com/in/gabriela-garin/",
        title: "Linkedin",
      },
      {
        url: "https://github.com/gabasaura",
        title: "Github",
      },
      {
        url: "https://www.behance.net/ggaabbaa",
        title: "Behance",
      },
      {
        url: "/cv/gabriela-garin__es.pdf",
        title: "CV ES",
      },
      {
        url: "/cv/gabriela-garin__en.pdf",
        title: "CV EN",
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
    imageUrl: "",
    description: "API/REST Generador de reuniones grupales que facilita la coordinación de horarios entre participantes, optimizando la disponibilidad de todos los asistentes.",
    stack: [
      { name: "Flask", color: "#000000" },
      { name: "SQLite", color: "#0b425c" },
      { name: "Python", color: "#396d96" },
    ],
    links: {
      frontend: "",
      backend: "https://github.com/gabasaura/api-rest_collective-meetings",
      deploy: "",
    },
    images: [
      {
        src: "/modal/02_wemeet/01-wemeet.png",
        caption: "Este proyecto es una API diseñada para facilitar la programación de reuniones, recopilando la disponibilidad de varios participantes y sugiriendo los mejores horarios según sus preferencias. Está construida con Flask y sigue principios RESTful.",
      },
      {
        src: "/modal/02_wemeet/02-wemeet.png",
        caption: "Imagen referencia apuntes de proyecto. Un objetivo clave es gamificar la experiencia del usuario, haciéndola más dinámica y divertida. Para lograr esto, se busca simplificar los procesos y hacerlos más accesibles. Un desafío importante ha sido garantizar la privacidad de cada reunión sin recurrir a un registro largo y complejo. La siguiente etapa es avanzar con el desarrollo del front-end y crear un MVP para testear la experiencia del usuario y realizar los ajustes necesarios.",
      },
    ],
    extraLink: [],
    tags: ["Backend"],
    styleClass: "",
    w: 1,
    h: 1,
  },
  {
    i: "3",
    title: "Tierlist",
    description: "API/REST generador de listas estilo Tierlist, diseñado para clasificar y organizar elementos de manera personalizada según las preferencias del usuario.",
    stack: [
      { name: "Flask", color: "#000000" },
      { name: "SQLite", color: "#0b425c" },
      { name: "Python", color: "#396d96" },
    ],
    links: {
      frontend: "",
      backend: "https://github.com/gabasaura/api-rest_tierlist",
      deploy: "",
    },
    images: [
      {
        src: "/modal/03_tierlist/01-tierlist.png",
        caption: "Este proyecto proporciona una API/REST para que los usuarios creen y compartan tier lists. ✨Características: CRUD de USUARIO / TIER LIST / CATEGORÍAS / ELEMENTOS",
      },
    ],
    extraLink: [],
    tags: ["Backend"],
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
        caption: "La 📍Pipo App es una aplicación web desarrollada en equipo como proyecto final del Fullstack Developer Bootcamp de 4Geeks Academy. Es una API/REST cuyo MVP (Producto Mínimo Viable) permite a los usuarios registrados listar, localizar y rankear 🚽 baños de uso público a través de un mapa interactivo.",
      },
      {
        src: "/modal/01_pipo/04-pipo.png",
        caption: "Un vistazo al Backend. Pipo también ofrece la posibilidad de dejar comentarios, calificar los baños y agregar nuevas ubicaciones. Es especialmente útil para turistas extranjeros que exploran la ciudad, ya que brinda una solución rápida y práctica para localizar servicios sanitarios mientras disfrutan de su visita. El mapa interactivo utiliza GPS para rastrear la ubicación del usuario, facilitando así la búsqueda de opciones cercanas a su posición actual.",
      },
      {
        src: "/modal/01_pipo/02-pipo.png",
        caption: "Aunque el proyecto es bastante ambicioso, este diagrama representa la primera etapa o MVP. En esta fase inicial, nos centramos en ofrecer las funcionalidades clave, está en nuestros planes seguir desarrollando y expandiendo las características para futuras versiones ✨.",
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
    description: "Juego de Batalla Naval desarrollado para enfrentamientos jugador vs PC.",
    stack: [
      { name: "JavaScript", color: "#f0db4f" },
      { name: "React", color: "#00d8ff" },
      { name: "CSS3", color: "#2d53e5" },
    ],
    links: {
      frontend: "https://github.com/gabasaura/reactjs-battleship",
      backend: "",
      deploy: "https://gabasaura.github.io/reactjs-battleship/",
    },
    images: [
      {
        src: "/modal/05_battleship/01-battleship.png",
        caption: "Desarrollo en React de Juego Batalla Naval, entre jugador vs PC.",
      },
    ],
    extraLink: [],
    tags: ["Frontend"],
    w: 1,
    h: 1
  },
  {
    i: "9",
    title: "Doodlings: Contenido no relacionado a programación.",
    description: "",
    stack: [],
    links: {
      frontend: "",
      backend: "",
      deploy: "",
    },
    images: [
      {
        src: "/modal/09_personal/01-personal.png",
        caption: "El dibujo, para mí, es como otro lenguaje. Es una práctica diaria de observación, algo más personal y difícil de compartir. Es una actividad que sigo realizando y seguramente haré siempre, pero sin la presión de plazos o metas. No quiero estructurarlo ni limitarlo, prefiero que mantenga su libertad y espontaneidad.",
      },
    ],
    extraLink: [
      {
        url: "https://www.behance.net/ggaabbaa",
        title: "Behance",
      },
      {
        url: "https://www.artstation.com/gaba",
        title: "Artstation",
      },
      {
        url: "https://www.instagram.com/gabasaura",
        title: "Instragram",
      },
    ],
    styleClass: "personal",
    tags: ["Personal"],
    w: 1,
    h: 1
  },
];
