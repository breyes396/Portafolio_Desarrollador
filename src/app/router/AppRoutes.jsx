import { useState } from 'react'
import MainLayout from '../layouts/MainLayout.jsx'
import HomeView from '../../features/home/components/HomeView.jsx'

const AboutView = () => (
  <div className="text-2xl font-semibold text-white">Vista Sobre Mí</div>
)

const SkillsView = () => (
  <div className="text-2xl font-semibold text-white">Vista Habilidades</div>
)

const ProjectsView = () => (
  <div className="text-2xl font-semibold text-white">Vista Proyectos</div>
)

const sectionViews = {
  home: HomeView,
  about: AboutView,
  skills: SkillsView,
  projects: ProjectsView,
}

function AppRoutes() {
  const [activeSection, setActiveSection] = useState('home')

  const ActiveView = sectionViews[activeSection] ?? HomeView

  return (
    <MainLayout currentSection={activeSection} setSection={setActiveSection}>
      <ActiveView onNavigate={setActiveSection} />
    </MainLayout>
  )
}

export default AppRoutes
