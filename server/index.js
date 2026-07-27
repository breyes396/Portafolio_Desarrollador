import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import rateLimit from 'express-rate-limit'

const app = express()
const PORT = process.env.PORT || 3001
const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN || '*'

// Necesario en Render (y cualquier host detrás de un proxy) para que
// express-rate-limit identifique la IP real del visitante, no la del proxy.
app.set('trust proxy', 1)

app.use(cors({ origin: ALLOWED_ORIGIN }))
app.use(express.json())

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  limit: 5, // máx. 5 envíos por IP en la ventana
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Demasiados intentos. Por favor espera unos minutos antes de volver a escribir.' },
})

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

app.post('/api/contact', contactLimiter, async (req, res) => {
  const { nombre, correo, mensaje } = req.body ?? {}

  if (!nombre || !correo || !mensaje) {
    return res.status(400).json({ error: 'Faltan campos requeridos.' })
  }

  const safeNombre = escapeHtml(nombre)
  const safeCorreo = escapeHtml(correo)
  const safeMensaje = escapeHtml(mensaje).replace(/\n/g, '<br />')

  try {
    const brevoResponse = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'api-key': process.env.BREVO_API_KEY,
      },
      body: JSON.stringify({
        sender: {
          name: process.env.BREVO_SENDER_NAME || 'Portafolio Billy Reyes',
          email: process.env.BREVO_SENDER_EMAIL,
        },
        to: [{ email: process.env.CONTACT_RECEIVER_EMAIL, name: 'Billy Reyes' }],
        replyTo: { email: correo, name: nombre },
        subject: `Nuevo mensaje de contacto de ${safeNombre}`,
        htmlContent: `
          <p><strong>Nombre:</strong> ${safeNombre}</p>
          <p><strong>Correo:</strong> ${safeCorreo}</p>
          <p><strong>Mensaje:</strong></p>
          <p>${safeMensaje}</p>
        `,
      }),
    })

    if (!brevoResponse.ok) {
      const errorBody = await brevoResponse.text()
      console.error('Brevo API error:', brevoResponse.status, errorBody)
      return res.status(502).json({ error: 'No se pudo enviar el correo.' })
    }

    return res.status(200).json({ success: true })
  } catch (error) {
    console.error('Contact endpoint error:', error)
    return res.status(500).json({ error: 'Error interno del servidor.' })
  }
})

app.listen(PORT, () => {
  console.log(`Contact server listening on port ${PORT}`)
})
