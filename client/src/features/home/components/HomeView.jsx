import portfolioData from '../../../shared/data/portfolioData.js'
import ScrollReveal from '../../../shared/components/ScrollReveal.jsx'
import HeroSection from './sections/HeroSection.jsx'
import AboutSection from './sections/AboutSection.jsx'
import SkillsSection from './sections/SkillsSection.jsx'
import ExperienceSection from './sections/ExperienceSection.jsx'
import ProjectsSection from './sections/ProjectsSection.jsx'
import ContactSection from './sections/ContactSection.jsx'

const { perfil, datosGenerales, habilidades, educacionTimeline, experiencia, proyectos } = portfolioData

function HomeView({ onNavigate }) {
  return (
    <div className="flex w-full flex-col">
      <HeroSection perfil={perfil} />

      <ScrollReveal>
        <AboutSection perfil={perfil} datosGenerales={datosGenerales} onNavigate={onNavigate} />
      </ScrollReveal>

      <ScrollReveal>
        <SkillsSection habilidades={habilidades} onNavigate={onNavigate} />
      </ScrollReveal>

      <ScrollReveal>
        <ExperienceSection
          educacionTimeline={educacionTimeline}
          experiencia={experiencia}
          onNavigate={onNavigate}
        />
      </ScrollReveal>

      <ScrollReveal>
        <ProjectsSection proyectos={proyectos} onNavigate={onNavigate} />
      </ScrollReveal>

      <ScrollReveal>
        <ContactSection />
      </ScrollReveal>
    </div>
  )
}

export default HomeView
