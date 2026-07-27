import { useState } from 'react'
import portfolioData from '../../../shared/data/portfolioData.js'
import ProjectCard from '../../../shared/components/ProjectCard.jsx'
import ProjectModal from '../../../shared/components/ProjectModal.jsx'

const { proyectos } = portfolioData

function ProjectsView() {
  const [selectedProject, setSelectedProject] = useState(null)

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
            <ProjectCard key={proyecto.titulo} project={proyecto} onClick={setSelectedProject} />
          ))}
        </section>
      </div>

      {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </div>
  )
}

export default ProjectsView
