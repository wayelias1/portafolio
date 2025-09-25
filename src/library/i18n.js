import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'es',
    resources: {
      en: {
        translation: {
          "sobremi": "About me",
          "proyectos": "Projects",
          "miexperiencia": "My experience",
          "habilidades": "Skills",
          "infoSobremi": "I am a full-stack developer with experience in front-end development. I have a strong background in PHP, Laravel, JavaScript, CSS, and database management. I am focused on optimizing server performance, designing intuitive interfaces, and improving the user experience. I am proactive, paying attention to details, and working well in a team.",
          "buttonGithub": "View my GitHub",
          "buttonCurriculum": "Download Curriculum",
          "linkCurriculum": "docs/Curriculum-ingles.pdf",
          "botonProyecto1": "View project",
          "botonProyecto2": "View code",
          "proyecto1": "This project was developed based on the specifications provided by the client. I created a landing page to promote their service, ensuring to include relevant information and an optimized design.",
          "proyecto2": "This project was during my experience at Movidagrafica.co, I collaborated on the development of a website for an immobilier agency.",
          "proyecto3": "This project is a demonstration of a static website developed as a template for personal use.",
          "proyecto4": "This project is a website for an online raffle, developed as a template for personal use by the client.",
          "infoMiexperiencia": "My first experience as a web developer was at Movidagrafica, where I acquired practical knowledge in using WordPress and strengthened my skills as a Full Stack Junior developer. During this period, I participated in real projects that allowed me to apply good programming practices, work in a team, and better understand the complete flow of web development. Currently, I am in the process of training in Social Oplesk, where I am expanding my knowledge in key technologies such as Docker and Amazon Web Services (AWS) tools. This learning has allowed me to better understand the modern application infrastructure, container management, and deployment in cloud environments, preparing me for more advanced tasks as a Full Stack developer.",
          "footer": "Contacts:"
        },
      },
      es: {
        translation: {
          "sobremi": "Sobre mi",
          "proyectos": "Proyectos",
          "miexperiencia": "Mi experiencia",
          "habilidades": "Habilidades",
          "infoSobremi": "Soy un desarrollador full-stack con experiencia mayormente front. Dominio de PHP, Laravel, JavaScript, CSS y bases de datos. Enfoque en la optimización del servidor, diseño de interfaces intuitivas y mejora de la experiencia de usuario. Proactivo, atento a los detalles y con capacidad de trabajo en equipo.",
          "buttonGithub": "Ver mi GitHub",
          "buttonCurriculum": "Descargar Curriculum",
          "linkCurriculum": "docs/Curriculum.pdf",
          "botonProyecto1": "Ver proyecto",
          "botonProyecto2": "Ver codigo",
          "proyecto1": "Este proyecto fue desarrollado en base a las especificaciones proporcionadas por el cliente. Creé una landing page para promocionar su servicio, asegurándome de incluir información relevante y un diseño optimizado.",
          "proyecto2": "Este proyecto fue durante mi experiencia en Movidagrafica.co, colaboré en el desarrollo de un sitio web para una agencia inmobiliaria.",
          "proyecto3": "Este proyecto es una demostración de una página web estática desarrollada como molde para uso personal.",
          "proyecto4": "Este proyecto es una página web de una rifa en línea, desarrollada como molde para uso personal del cliente.",
          "infoMiexperiencia": "Mi primera experiencia como desarrollador web fue en Movidagrafica, donde adquirí conocimientos prácticos en el uso de WordPress y fortalecí mis habilidades como desarrollador Full Stack junior. Durante este período, participé en proyectos reales que me permitieron aplicar buenas prácticas de programación, trabajar en equipo y comprender mejor el flujo completo del desarrollo web. Actualmente me encuentro en proceso de formación en Social Oplesk, donde estoy ampliando mis conocimientos en tecnologías clave como Docker y herramientas de Amazon Web Services (AWS). Este aprendizaje me está permitiendo comprender mejor la infraestructura moderna de aplicaciones, la gestión de contenedores, y el despliegue en entornos cloud, preparándome para asumir retos más avanzados como desarrollador Full Stack.",
          "footer": "Contactos:"
        },
      },
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
