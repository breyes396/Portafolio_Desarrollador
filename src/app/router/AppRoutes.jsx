import MainLayout from '../layouts/MainLayout.jsx'
import HomeView from '../../features/home/components/HomeView.jsx'
import AboutView from '../../features/about/components/AboutView.jsx'
import SkillsView from '../../features/skills/components/SkillsView.jsx'
import ProjectsView from '../../features/projects/components/ProjectsView.jsx'
import { useNavigation } from './hooks/useNavigation.js'

const sectionViews = {
  home: HomeView,
  about: AboutView,
  skills: SkillsView,
  projects: ProjectsView,
}

function AppRoutes() {
  const { activeSection, navigate } = useNavigation()

  const ActiveView = sectionViews[activeSection] ?? HomeView

  return (
    <MainLayout currentSection={activeSection} setSection={navigate}>
      <ActiveView onNavigate={navigate} />
    </MainLayout>
  )
}

export default AppRoutes
