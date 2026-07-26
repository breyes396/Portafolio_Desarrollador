import portfolioData from '../../../shared/data/portfolioData.js'

const { perfil, habilidades, proyectos } = portfolioData

const topSkills = [...habilidades].sort((a, b) => b.porcentaje - a.porcentaje).slice(0, 3)
const featuredProject = proyectos[0]

function IconUser(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
      />
    </svg>
  )
}

function IconBolt(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
      />
    </svg>
  )
}

function IconFolder(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-19.5 0v6a2.25 2.25 0 0 0 2.25 2.25h15a2.25 2.25 0 0 0 2.25-2.25v-6m-19.5 0h19.5M4.5 9.75V6.75A2.25 2.25 0 0 1 6.75 4.5h3.879a1.5 1.5 0 0 1 1.06.44l2.122 2.12a1.5 1.5 0 0 0 1.06.44H17.25a2.25 2.25 0 0 1 2.25 2.25v.75"
      />
    </svg>
  )
}

function IconDownload(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 12m0 0 4.5-4.5M12 12V3"
      />
    </svg>
  )
}

function IconArrowRight(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
    </svg>
  )
}

function CardActionButton({ children, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-400 transition-colors hover:text-indigo-300"
    >
      {children}
      <IconArrowRight className="h-4 w-4" />
    </button>
  )
}

function DashboardCard({ icon, title, children }) {
  return (
    <div className="group flex flex-col rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-lg shadow-slate-950/40 transition-all hover:-translate-y-1 hover:border-indigo-500/50 hover:shadow-indigo-500/10">
      <div className="mb-4 flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 transition-colors group-hover:bg-indigo-500/20">
          {icon}
        </span>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
      </div>
      {children}
    </div>
  )
}

function HomeView({ onNavigate }) {
  return (
    <div className="flex flex-col gap-14">
      <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950 px-6 py-16 text-center sm:px-12 sm:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.25),_transparent_60%)]" />
        <div className="relative flex flex-col items-center gap-4">
          <p className="text-sm font-medium uppercase tracking-widest text-indigo-400">
            {perfil.titulos.join(' · ')}
          </p>
          <h1 className="text-4xl font-bold text-white sm:text-5xl">{perfil.nombre}</h1>
          <p className="max-w-xl text-lg text-slate-300">{perfil.fraseBienvenida}</p>
          <button
            type="button"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition-transform hover:scale-105 hover:bg-indigo-400"
          >
            <IconDownload className="h-5 w-5" />
            Descargar CV
          </button>
        </div>
      </section>

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <DashboardCard icon={<IconUser className="h-5 w-5" />} title="Sobre Mí">
          <p className="text-sm text-slate-300">{perfil.extracto}</p>
          <CardActionButton onClick={() => onNavigate('about')}>Conóceme más</CardActionButton>
        </DashboardCard>

        <DashboardCard icon={<IconBolt className="h-5 w-5" />} title="Habilidades Top">
          <ul className="flex flex-col gap-3">
            {topSkills.map((skill) => (
              <li key={skill.tecnologia}>
                <div className="mb-1 flex items-center justify-between text-sm text-slate-300">
                  <span>{skill.tecnologia}</span>
                  <span className="text-slate-400">{skill.porcentaje}%</span>
                </div>
                <div className="h-1.5 w-full rounded-full bg-slate-800">
                  <div
                    className="h-1.5 rounded-full bg-indigo-500"
                    style={{ width: `${skill.porcentaje}%` }}
                  />
                </div>
              </li>
            ))}
          </ul>
          <CardActionButton onClick={() => onNavigate('skills')}>
            Ver todas las habilidades
          </CardActionButton>
        </DashboardCard>

        <DashboardCard icon={<IconFolder className="h-5 w-5" />} title="Proyecto Destacado">
          <h4 className="mb-1 font-semibold text-white">{featuredProject.titulo}</h4>
          <p className="text-sm text-slate-300">{featuredProject.descripcion}</p>
          <CardActionButton onClick={() => onNavigate('projects')}>
            Ver todos los proyectos
          </CardActionButton>
        </DashboardCard>
      </section>
    </div>
  )
}

export default HomeView
