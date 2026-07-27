import gastroflow1 from '../../assets/img/gastroflow1.jpg'
import gastroflow2 from '../../assets/img/gastroflow2.png'
import gastroflow3 from '../../assets/img/gastroflow3.png'
import nexusbank1 from '../../assets/img/nexusbank1.jpg'
import nexusbank2 from '../../assets/img/nexusbank2.png'
import nexusbank3 from '../../assets/img/nexusbank3.png'
import bloodlink1 from '../../assets/img/BloodLink1.png'
import bloodlink2 from '../../assets/img/Bloodlink2.png'
import bloodlink3 from '../../assets/img/bloodlink3.png'
import kinalvr1 from '../../assets/img/kinalvr1.png'
import kinalvr2 from '../../assets/img/kinalvr2.png'
import kinalvr3 from '../../assets/img/kinalvr3.png'

const proyectos = [
  {
    titulo: 'GastroFlow',
    descripcion:
      'Plataforma de gestión de restaurantes con reservaciones, pedidos y reseñas en tiempo real. Arquitectura de microservicios: autenticación y personal en un servicio con PostgreSQL, dominio de negocio (mesas, menús, facturas) en otro con MongoDB, cliente web de administración y app móvil para comensales.',
    habilidadesAprendidas: ['Microservicios', 'PostgreSQL', 'MongoDB', 'Web', 'Mobile'],
    imagenes: [gastroflow1, gastroflow2, gastroflow3],
    enlaces: [
      { tipo: 'demo', texto: 'Ver Demo', url: 'https://gastroflow-frontend.onrender.com/' },
      { tipo: 'repo', texto: 'Repositorio', url: 'https://github.com/csican-2024328/GastroFlow.git' },
    ],
  },
  {
    titulo: 'NexusBank',
    descripcion:
      'Sistema bancario full stack para gestión de autenticación, cuentas, transferencias, depósitos, favoritos y promociones. Proyecto en equipo con arquitectura de microservicios: autenticación y cuentas con PostgreSQL, catálogo y promociones con MongoDB, cliente web de administración y app móvil.',
    habilidadesAprendidas: ['Full Stack', 'Microservicios', 'PostgreSQL', 'MongoDB'],
    imagenes: [nexusbank1, nexusbank2, nexusbank3],
    enlaces: [
      { tipo: 'demo', texto: 'Ver Demo', url: 'https://sistema-bancario-nexusbank.onrender.com/' },
      { tipo: 'repo', texto: 'Repositorio', url: 'https://github.com/breyes396/Sistema-bancario-NexusBank.git' },
    ],
  },
  {
    titulo: 'BloodLink',
    descripcion:
      'Plataforma de gestión de donaciones de sangre con un asistente de IA integrado que resuelve dudas sobre elegibilidad, requisitos y el proceso de donación. Proyecto en equipo con arquitectura de microservicios: autenticación, usuarios e incentivos con PostgreSQL; citas, triajes, inventario de sangre y reportes con MongoDB; cliente web para donantes.',
    habilidadesAprendidas: ['IA Integrada', 'Microservicios', 'PostgreSQL', 'MongoDB'],
    imagenes: [bloodlink1, bloodlink2, bloodlink3],
    enlaces: [
      { tipo: 'demo', texto: 'Ver Demo', url: 'https://bloodlink-web-pgq0.onrender.com/' },
      { tipo: 'repo', texto: 'Repositorio', url: 'https://github.com/ByronKinal/BloodLink.git' },
    ],
  },
  {
    titulo: 'KinalVR',
    descripcion:
      'Recorrido interactivo de las instalaciones de Kinal en Realidad Virtual. Arquitectura dividida en cliente y servidor para manejar la lógica y los entornos 3D en la web. Integración de entornos 3D en la web con WebXR, manejo de estado complejo en React y desarrollo de un backend que soporta experiencias en tiempo real.',
    habilidadesAprendidas: ['WebXR', 'React', '3D', 'Backend'],
    imagenes: [kinalvr1, kinalvr2, kinalvr3],
    enlaces: [
      { tipo: 'demo', texto: 'Ver Demo', url: 'https://kinalvr-client.onrender.com/' },
      { tipo: 'repo', texto: 'Repo Cliente', url: 'https://github.com/KinalVR-Expo2026/KinalVR-Client.git' },
      { tipo: 'repo', texto: 'Repo Servidor', url: 'https://github.com/KinalVR-Expo2026/KinalVR-Server.git' },
    ],
  },
]

export default proyectos
