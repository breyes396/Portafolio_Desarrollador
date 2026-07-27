import { useState } from 'react'
import Button from '../../../../shared/components/Button.jsx'
import ProjectCard from '../../../../shared/components/ProjectCard.jsx'
import ProjectModal from '../../../../shared/components/ProjectModal.jsx'
import SectionTitle from '../../../../shared/components/SectionTitle.jsx'
import { IconArrowRight, IconFolder } from '../../../../shared/components/icons/index.jsx'

function ProjectsSection({ proyectos, onNavigate }) {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section className="w-full bg-zinc-950 px-6 py-24 md:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionTitle icon={<IconFolder className="h-5 w-5" />} title="Proyectos Destacados" />

        <div className="grid gap-6 lg:grid-cols-2">
          {proyectos.map((proyecto) => (
            <ProjectCard key={proyecto.titulo} project={proyecto} onClick={setSelectedProject} />
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

      {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </section>
  )
}

export default ProjectsSection
