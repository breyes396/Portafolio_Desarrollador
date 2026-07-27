import proyectos from './proyectos.js'

const portfolioData = {
  perfil: {
    nombre: 'Billy Adrián Reyes López',
    titulos: ['Desarrollador Frontend', 'Tutor Académico en Matemáticas y Física'],
    fraseBienvenida: 'Construyo interfaces, resuelvo ecuaciones.',
    fraseDestacada: 'La única forma de hacer un gran trabajo es amar lo que haces.',
    heroDescripcion:
      'Soy un desarrollador enfocado en construir aplicaciones web completas, combinando frontend, backend y bases de datos. Me motiva resolver problemas, escribir código de calidad y seguir creciendo dentro del mundo del desarrollo de software.',
    resumenHome:
      'Desarrollador Full Stack Junior enfocado en crear soluciones digitales mediante código, creatividad y aprendizaje constante. Motivado por crecer profesionalmente y enfrentar nuevos desafíos tecnológicos.',
    descripcionDetallada:
      'Soy un desarrollador Full Stack Junior apasionado por la tecnología y la creación de soluciones digitales. Me enfoco en aprender constantemente, mejorar mis habilidades y desarrollar aplicaciones funcionales que aporten valor.',
    metas:
      'Crecer como desarrollador, participar en proyectos reales y fortalecer mis conocimientos en nuevas tecnologías para crear soluciones eficientes e innovadoras.',
    capacidades: [
      'Aprendizaje continuo',
      'Resolución de problemas',
      'Adaptabilidad',
      'Trabajo en equipo',
      'Responsabilidad',
    ],
  },

  datosGenerales: {
    edad: '18 años',
    correo: 'billyrey3645@gmail.com',
    formacionActual: 'Fundación Kinal',
    aniosExperiencia: '3 años',
  },

  habilidades: [
    { nombre: 'React Native', porcentaje: 91 },
    { nombre: 'JavaScript', porcentaje: 95 },
    { nombre: 'React', porcentaje: 95 },
    { nombre: 'HTML', porcentaje: 94 },
    { nombre: 'Java', porcentaje: 96 },
    { nombre: 'Git', porcentaje: 92 },
    { nombre: 'CSS', porcentaje: 90 },
    { nombre: 'GitHub', porcentaje: 90 },
    { nombre: 'Node.js', porcentaje: 89 },
    { nombre: 'MySQL', porcentaje: 88 },
    { nombre: 'C#', porcentaje: 88 },
    { nombre: '.NET', porcentaje: 87 },
    { nombre: 'PostgreSQL', porcentaje: 86 },
    { nombre: 'MongoDB', porcentaje: 89 },
  ],

  educacionTimeline: [
    {
      anio: '2024',
      titulo: 'Inicio en desarrollo de software',
      resumenHome:
        'Inicio de mi formación en programación, aprendiendo lógica, POO, bases de datos y mis primeros proyectos con Java y MySQL.',
      descripcion:
        'Inicio de mi formación en programación, adquiriendo bases en lógica de programación, fundamentos de desarrollo, programación orientada a objetos (POO), redes y manejo de bases de datos. Desarrollo de mis primeros proyectos utilizando herramientas como PSeInt, Java, Visual Studio Code, NetBeans y MySQL.',
    },
    {
      anio: '2025',
      titulo: 'Desarrollo backend y buenas prácticas',
      resumenHome:
        'Profundización en desarrollo backend con Java EE y Spring Boot, patrones de diseño y control de versiones con Git y GitHub.',
      descripcion:
        'Profundización en desarrollo de aplicaciones mediante Java EE y Spring Boot, fortaleciendo conocimientos en bases de datos MySQL, arquitectura de software y patrones de diseño como MVC y Singleton. Implementación de interfaces gráficas con JavaFX y manejo de herramientas de control de versiones como Git y GitHub.',
    },
    {
      anio: '2026',
      titulo: 'Desarrollo Full Stack y nuevas tecnologías',
      resumenHome:
        'Ampliación hacia el desarrollo Full Stack con React, Node.js, bases de datos modernas y despliegue de aplicaciones.',
      descripcion:
        'Ampliación de conocimientos en desarrollo web y aplicaciones modernas utilizando React, Node.js, JavaScript y .NET. Experiencia con bases de datos como MongoDB y PostgreSQL, además de herramientas como Docker, despliegue de aplicaciones y desarrollo móvil con React Native para la creación de aplicaciones Android.',
    },
  ],

  experiencia: [
    {
      titulo: 'Sistema empresarial',
      organizacion: 'Automotriz Caribe',
      contexto: 'Práctica profesional',
      descripcion:
        'Desarrollo de un sistema orientado a mejorar procesos internos de la empresa, aplicando conocimientos de desarrollo de software, bases de datos y buenas prácticas de programación.',
    },
    {
      titulo: 'Sistema de notas y calificaciones',
      organizacion: 'Institución educativa',
      contexto: null,
      descripcion:
        'Desarrollo de una aplicación para la gestión de notas y calificaciones académicas, enfocada en facilitar el registro, consulta y organización de información estudiantil.',
    },
  ],

  proyectos,
}

export default portfolioData
