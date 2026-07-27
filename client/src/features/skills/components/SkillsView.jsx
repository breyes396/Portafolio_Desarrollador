import portfolioData from '../../../shared/data/portfolioData.js'
import Card from '../../../shared/components/Card.jsx'
import ProgressBar from '../../../shared/components/ProgressBar.jsx'

const { habilidades } = portfolioData

function SkillCard({ nombre, porcentaje }) {
  return (
    <Card className="p-6">
      <div className="mb-3 flex items-center justify-between text-sm">
        <h3 className="font-medium text-white">{nombre}</h3>
        <span className="font-semibold text-indigo-400">{porcentaje}%</span>
      </div>
      <ProgressBar percentage={porcentaje} />
    </Card>
  )
}

function SkillsView() {
  return (
    <div className="w-full bg-zinc-950 px-6 py-24 md:px-12">
      <div className="animate-fade-in mx-auto flex max-w-7xl flex-col gap-10">
        <header>
          <p className="text-sm font-medium uppercase tracking-widest text-indigo-400">Habilidades</p>
          <h1 className="mt-2 font-science text-3xl text-white sm:text-4xl">Stack Técnico</h1>
          <p className="mt-3 max-w-2xl text-zinc-300">
            Un resumen de las tecnologías con las que trabajo y mi nivel de dominio en cada una.
          </p>
        </header>

        <section className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {habilidades.map((skill) => (
            <SkillCard key={skill.nombre} {...skill} />
          ))}
        </section>
      </div>
    </div>
  )
}

export default SkillsView
