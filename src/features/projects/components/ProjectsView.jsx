import portfolioData from '../../../shared/data/portfolioData.js'
import Button from '../../../shared/components/Button.jsx'
import Card from '../../../shared/components/Card.jsx'
import Chip from '../../../shared/components/Chip.jsx'
import { IconGithub, IconImage } from '../../../shared/components/icons/index.jsx'

const { proyectos } = portfolioData

function ProjectCard({ titulo, descripcion, habilidadesAprendidas, github }) {
  return (
    <Card className="flex flex-col overflow-hidden">
      <div className="flex h-56 items-center justify-center bg-zinc-800">
        <IconImage className="h-16 w-16 text-zinc-500" />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-oswald text-lg tracking-wide text-white">{titulo}</h3>
        <p className="mt-2 text-sm leading-relaxed text-zinc-300">{descripcion}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {habilidadesAprendidas.map((skill) => (
            <Chip key={skill}>{skill}</Chip>
          ))}
        </div>

        <Button href={github} icon={<IconGithub className="h-5 w-5" />} className="mt-6">
          Ver Repositorio
        </Button>
      </div>
    </Card>
  )
}

function ProjectsView() {
  return (
    <div className="w-full bg-zinc-950 px-6 py-24 md:px-12">
      <div className="animate-fade-in mx-auto flex max-w-7xl flex-col gap-10">
        <header>
          <p className="text-sm font-medium uppercase tracking-widest text-indigo-400">Proyectos</p>
          <h1 className="mt-2 font-science text-3xl text-white sm:text-4xl">Trabajo Destacado</h1>
          <p className="mt-3 max-w-2xl text-zinc-300">
            Una selección de proyectos donde he aplicado y desarrollado mis habilidades técnicas.
          </p>
        </header>

        <section className="grid gap-6 lg:grid-cols-2">
          {proyectos.map((proyecto) => (
            <ProjectCard key={proyecto.titulo} {...proyecto} />
          ))}
        </section>
      </div>
    </div>
  )
}

export default ProjectsView
