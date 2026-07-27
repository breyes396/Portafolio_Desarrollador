import Footer from './Footer.jsx'
import { useMobileMenu } from '../../shared/hooks/useMobileMenu.js'

const NAV_ITEMS = [
  { id: 'home', label: 'Inicio' },
  { id: 'about', label: 'Sobre Mí' },
  { id: 'skills', label: 'Habilidades' },
  { id: 'projects', label: 'Proyectos' },
]

function MainLayout({ children, currentSection, setSection }) {
  const { isOpen: isMenuOpen, toggle: toggleMenu, close: closeMenu } = useMobileMenu()

  const handleNavClick = (sectionId) => {
    setSection(sectionId)
    closeMenu()
  }

  return (
    <div className="flex min-h-screen flex-col bg-zinc-950 text-zinc-100">
      <header className="sticky top-0 z-50 border-b border-zinc-900 bg-zinc-950">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <span className="font-oswald text-lg tracking-wide text-white">Portafolio: Billy Reyes</span>

          <ul className="hidden items-center gap-2 md:flex">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => handleNavClick(item.id)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    currentSection === item.id
                      ? 'bg-indigo-500 text-white shadow-sm shadow-indigo-500/30'
                      : 'text-zinc-300 hover:bg-zinc-900 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={toggleMenu}
            className="inline-flex items-center justify-center rounded-md p-2 text-zinc-300 hover:bg-zinc-900 hover:text-white md:hidden"
            aria-label="Abrir menú de navegación"
            aria-expanded={isMenuOpen}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>
      </header>

      <div
        className={`fixed inset-0 z-[55] bg-black/60 transition-opacity duration-300 md:hidden ${
          isMenuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      <nav
        className={`fixed inset-y-0 left-0 z-[60] w-72 max-w-[80vw] border-r border-zinc-900 bg-zinc-950 pt-20 shadow-2xl transition-transform duration-300 ease-out md:hidden ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        aria-hidden={!isMenuOpen}
      >
        <ul className="flex flex-col gap-1 px-4 py-4">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => handleNavClick(item.id)}
                className={`w-full rounded-md px-4 py-2 text-left text-sm font-medium transition-colors ${
                  currentSection === item.id
                    ? 'bg-indigo-500 text-white'
                    : 'text-zinc-300 hover:bg-zinc-900 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <main className="flex w-full flex-1 flex-col">{children}</main>

      <Footer />
    </div>
  )
}

export default MainLayout
