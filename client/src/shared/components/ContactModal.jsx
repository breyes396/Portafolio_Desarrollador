import { useEffect, useState } from 'react'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001'
const initialForm = { nombre: '', correo: '', mensaje: '' }

function IconX(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
    </svg>
  )
}

function ContactModal({ onClose }) {
  const [form, setForm] = useState(initialForm)
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isError, setIsError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose])

  const handleChange = (event) => {
    setForm((prev) => ({ ...prev, [event.target.name]: event.target.value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsLoading(true)
    setIsError(false)
    setIsSuccess(false)

    try {
      const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await response.json().catch(() => null)

      if (!response.ok) {
        throw new Error(data?.error || 'Hubo un problema al enviar tu mensaje. Intenta de nuevo más tarde.')
      }

      setIsSuccess(true)
      setForm(initialForm)
    } catch (error) {
      setErrorMessage(error.message || 'Hubo un problema al enviar tu mensaje. Intenta de nuevo más tarde.')
      setIsError(true)
    } finally {
      setIsLoading(false)
    }
  }

  const inputClasses =
    'mb-4 w-full rounded-lg border border-zinc-700 bg-zinc-800 p-3 text-white placeholder-zinc-500 focus:border-indigo-500 focus:outline-none'

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg rounded-2xl bg-zinc-900 p-8 shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 text-zinc-400 hover:text-white"
          aria-label="Cerrar"
        >
          <IconX className="h-6 w-6" />
        </button>

        <h2 className="font-science text-2xl text-white">Envíame un mensaje</h2>
        <p className="mt-2 text-sm text-zinc-400">Completa el formulario y te responderé lo antes posible.</p>

        <form onSubmit={handleSubmit} className="mt-6">
          <input
            type="text"
            name="nombre"
            required
            placeholder="Nombre"
            value={form.nombre}
            onChange={handleChange}
            className={inputClasses}
          />
          <input
            type="email"
            name="correo"
            required
            placeholder="Correo"
            value={form.correo}
            onChange={handleChange}
            className={inputClasses}
          />
          <textarea
            name="mensaje"
            required
            rows={4}
            placeholder="Mensaje"
            value={form.mensaje}
            onChange={handleChange}
            className={`${inputClasses} resize-none`}
          />

          {isSuccess && (
            <p className="mb-4 rounded-lg bg-emerald-500/10 p-3 text-sm text-emerald-400">
              ¡Mensaje enviado con éxito! Te responderé pronto.
            </p>
          )}
          {isError && (
            <p className="mb-4 rounded-lg bg-red-500/10 p-3 text-sm text-red-400">{errorMessage}</p>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full rounded-full bg-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition-transform hover:scale-105 hover:bg-indigo-400 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100"
          >
            {isLoading ? 'Enviando…' : 'Enviar mensaje'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default ContactModal
