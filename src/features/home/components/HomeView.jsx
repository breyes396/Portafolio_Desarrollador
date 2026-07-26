import portfolioData from '../../../shared/data/portfolioData.js'
import HeroSection from './sections/HeroSection.jsx'
import AboutSection from './sections/AboutSection.jsx'
import SkillsSection from './sections/SkillsSection.jsx'
import ExperienceSection from './sections/ExperienceSection.jsx'
import ProjectsSection from './sections/ProjectsSection.jsx'
import ContactSection from './sections/ContactSection.jsx'

const { perfil, datosGenerales, habilidades, experiencia, proyectos } = portfolioData

function HomeView({ onNavigate }) {
  return (
    <div className="flex w-full flex-col">
      <HeroSection perfil={perfil} />
      <AboutSection perfil={perfil} datosGenerales={datosGenerales} onNavigate={onNavigate} />
      <SkillsSection habilidades={habilidades} onNavigate={onNavigate} />
      <ExperienceSection datosGenerales={datosGenerales} experiencia={experiencia} onNavigate={onNavigate} />
      <ProjectsSection proyectos={proyectos} onNavigate={onNavigate} />
      <ContactSection />
    </div>
  )
}

export default HomeView
