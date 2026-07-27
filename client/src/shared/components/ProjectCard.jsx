import Button from './Button.jsx'
import Card from './Card.jsx'
import Chip from './Chip.jsx'
import { IconArrowRight, IconImage } from './icons/index.jsx'

function ProjectCard({ project, onClick }) {
  return (
    <Card className="flex flex-col overflow-hidden">
      <div className="flex h-48 items-center justify-center overflow-hidden bg-zinc-800">
        {project.imagenes?.[0] ? (
          <img src={project.imagenes[0]} alt={project.titulo} className="h-full w-full object-cover" />
        ) : (
          <IconImage className="h-14 w-14 text-zinc-500" />
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-oswald text-lg tracking-wide text-white">{project.titulo}</h3>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-zinc-300">{project.descripcion}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.habilidadesAprendidas.map((skill) => (
            <Chip key={skill}>{skill}</Chip>
          ))}
        </div>

        <Button
          onClick={() => onClick(project)}
          icon={<IconArrowRight className="h-4 w-4" />}
          iconPosition="right"
          className="mt-6"
        >
          Ver detalles
        </Button>
      </div>
    </Card>
  )
}

export default ProjectCard
