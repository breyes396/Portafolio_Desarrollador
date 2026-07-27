# Servidor de Contacto (Brevo)

Backend mínimo en Express que recibe el formulario de contacto del portafolio y envía el correo usando la API transaccional de [Brevo](https://www.brevo.com/). Existe como servicio separado para que la API key de Brevo nunca llegue al navegador (las variables `VITE_*` del frontend se incluyen en el bundle público).

## Desarrollo local

```bash
cd server
pnpm install
```

Crea un archivo `.env` en `server/` (no se sube a git) con estas variables:

```
PORT=3001
ALLOWED_ORIGIN=http://localhost:5173
BREVO_API_KEY=
BREVO_SENDER_EMAIL=
BREVO_SENDER_NAME=Portafolio Billy Reyes
CONTACT_RECEIVER_EMAIL=
```

Luego:

```bash
pnpm dev     # con auto-reload al guardar cambios (node --watch)
# o: pnpm start   (sin auto-reload, el comando que usa Render en producción)
```

El frontend (`pnpm dev` en la raíz) debe apuntar a este servidor mediante la variable `VITE_API_URL` en un `.env` propio en la raíz del proyecto (ej. `VITE_API_URL=http://localhost:3001`).

## Rate limiting

`POST /api/contact` está limitado a **5 envíos por IP cada 15 minutos** (`express-rate-limit`). Al superarlo, responde `429` con un mensaje que el modal de contacto muestra directamente al usuario. El límite vive en memoria del proceso, por lo que se reinicia si el servicio se reinicia (suficiente para este caso de uso; no requiere Redis ni base de datos).

## Despliegue en Render (dos servicios en el mismo repo)

1. **Frontend** — Static Site
   - Root Directory: `.` (raíz del repo)
   - Build Command: `pnpm install && pnpm build`
   - Publish Directory: `dist`
   - Variable de entorno: `VITE_API_URL` = URL pública del servicio backend (paso 2).

2. **Backend** — Web Service
   - Root Directory: `server`
   - Build Command: `pnpm install`
   - Start Command: `pnpm start`
   - Variables de entorno: `BREVO_API_KEY`, `BREVO_SENDER_EMAIL`, `BREVO_SENDER_NAME`, `CONTACT_RECEIVER_EMAIL`, `ALLOWED_ORIGIN` = URL pública del sitio estático (paso 1).

Al tener Root Directory distintos, ambos servicios se despliegan desde el mismo repositorio sin interferir entre sí.
