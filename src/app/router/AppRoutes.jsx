import { useState } from 'react'
import MainLayout from '../layouts/MainLayout.jsx'
import HomeView from '../../features/home/components/HomeView.jsx'
import AboutView from '../../features/about/components/AboutView.jsx'
import SkillsView from '../../features/skills/components/SkillsView.jsx'
import ProjectsView from '../../features/projects/components/ProjectsView.jsx'

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
