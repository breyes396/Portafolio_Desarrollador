import { useEffect, useState } from 'react'
import Button from './Button.jsx'
import Chip from './Chip.jsx'
import { IconGithub } from './icons/index.jsx'

function IconX(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
    </svg>
  )
}

function IconChevronLeft(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
  )
}

function IconChevronRight(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  )
}

function ProjectModal({ project, onClose }) {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    setCurrentImage(0)
  }, [project])

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

  if (!project) return null

  const total = project.imagenes.length
  const goPrev = () => setCurrentImage((prev) => (prev - 1 + total) % total)
  const goNext = () => setCurrentImage((prev) => (prev + 1) % total)

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative grid w-full max-w-5xl grid-cols-1 overflow-y-auto rounded-2xl bg-zinc-900 shadow-2xl lg:max-h-[90vh] lg:grid-cols-2"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 text-zinc-400 hover:text-white"
          aria-label="Cerrar"
        >
          <IconX className="h-6 w-6" />
        </button>

        <div className="relative bg-zinc-950">
          <img
            src={project.imagenes[currentImage]}
            alt={`${project.titulo} captura ${currentImage + 1}`}
            className="h-64 w-full object-cover lg:h-full"
          />

          {total > 1 && (
            <>
              <button
                type="button"
                onClick={goPrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white hover:bg-black"
                aria-label="Imagen anterior"
              >
                <IconChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={goNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white hover:bg-black"
                aria-label="Imagen siguiente"
              >
                <IconChevronRight className="h-5 w-5" />
              </button>
            </>
          )}
        </div>

        <div className="p-8">
          <h2 className="font-science text-3xl text-white lg:text-4xl">{project.titulo}</h2>
          <p className="mt-4 text-zinc-300">{project.descripcion}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.habilidadesAprendidas.map((skill) => (
              <Chip key={skill}>{skill}</Chip>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            {project.enlaces.map((enlace) => (
              <Button
                key={enlace.url}
                href={enlace.url}
                variant={enlace.tipo === 'demo' ? 'solid' : 'outline'}
                icon={enlace.tipo === 'repo' ? <IconGithub className="h-4 w-4" /> : undefined}
              >
                {enlace.texto}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectModal
