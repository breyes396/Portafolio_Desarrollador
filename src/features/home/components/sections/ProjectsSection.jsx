import Button from '../../../../shared/components/Button.jsx'
import Card from '../../../../shared/components/Card.jsx'
import Chip from '../../../../shared/components/Chip.jsx'
import SectionTitle from '../../../../shared/components/SectionTitle.jsx'
import { IconArrowRight, IconFolder, IconGithub, IconImage } from '../../../../shared/components/icons/index.jsx'

function ProjectCard({ titulo, descripcion, habilidadesAprendidas, github }) {
  return (
    <Card className="flex flex-col overflow-hidden">
      <div className="flex h-48 items-center justify-center bg-zinc-800">
        <IconImage className="h-14 w-14 text-zinc-500" />
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

function ProjectsSection({ proyectos, onNavigate }) {
  return (
    <section className="w-full bg-zinc-950 px-6 py-24 md:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionTitle icon={<IconFolder className="h-5 w-5" />} title="Proyectos Destacados" />

        <div className="grid gap-6 lg:grid-cols-2">
          {proyectos.map((proyecto) => (
            <ProjectCard key={proyecto.titulo} {...proyecto} />
          ))}
        </div>

        <Button
          onClick={() => onNavigate('projects')}
          icon={<IconArrowRight className="h-4 w-4" />}
          iconPosition="right"
          className="mt-10"
        >
          Ver portafolio completo
        </Button>
      </div>
    </section>
  )
}

export default ProjectsSection
