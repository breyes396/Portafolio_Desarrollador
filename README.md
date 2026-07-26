# Portafolio Desarrollador — Billy Reyes

Portafolio personal construido como Single Page Application, con navegación basada en estado (sin librería de rutas) y datos centralizados en un archivo JSON.

## Stack

- **React 19** + **Vite** (dev server y build)
- **Tailwind CSS v4** (vía `@tailwindcss/vite`, sin archivo de configuración adicional)
- **pnpm** como gestor de paquetes
- **oxlint** para linting

## Requisitos

- Node.js 18+
- pnpm

## Scripts

```bash
pnpm install   # instala dependencias
pnpm dev       # servidor de desarrollo (http://localhost:5173)
pnpm build     # build de producción en /dist
pnpm preview   # sirve el build de producción localmente
pnpm lint      # corre oxlint
```

## Estructura del proyecto

```
src/
├── app/
│   ├── App.jsx              # punto de entrada del árbol de componentes
│   ├── main.jsx              # entry point de Vite (montaje en el DOM)
│   ├── layouts/
│   │   └── MainLayout.jsx    # navbar, contenedor principal y footer
│   └── router/
│       └── AppRoutes.jsx     # enrutador basado en estado (activeSection)
├── assets/
│   └── img/                  # imágenes estáticas
├── features/                 # una carpeta por sección del portafolio
│   ├── home/components/      # HomeView (vista de resumen)
│   ├── about/components/     # pendiente
│   ├── skills/components/    # pendiente
│   └── projects/components/  # pendiente
├── shared/
│   ├── components/           # componentes genéricos reutilizables (botones, tarjetas)
│   ├── data/
│   │   └── portfolioData.js  # "base de datos" estática del portafolio (perfil, habilidades, experiencia, proyectos)
│   └── utils/                # utilidades compartidas
└── styles/
    └── index.css             # import global de Tailwind CSS
```

## Navegación

No se usa `react-router`. `AppRoutes.jsx` mantiene el estado `activeSection` (`home | about | skills | projects`) y renderiza la vista correspondiente dentro de `MainLayout`. La función `setSection` se pasa como prop `onNavigate` a las vistas, para que botones internos (por ejemplo, las tarjetas de la vista de inicio) también puedan cambiar de sección.

## Estado actual

- ✅ Estructura de carpetas y arquitectura base.
- ✅ `MainLayout` con navbar responsive (menú hamburguesa en móvil) y footer con enlaces a LinkedIn, CompuTrabajo y GitHub.
- ✅ `portfolioData.js` con perfil, datos generales, habilidades, experiencia y proyectos.
- ✅ Vista de **Inicio** (`HomeView`): hero de bienvenida + dashboard con tarjetas de "Sobre Mí", "Habilidades Top" y "Proyecto Destacado".
- ⏳ Pendiente: vistas detalladas de Sobre Mí, Habilidades y Proyectos (actualmente son placeholders).
