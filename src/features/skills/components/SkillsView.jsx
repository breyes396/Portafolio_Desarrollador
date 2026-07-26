import { useEffect, useState } from 'react'
import portfolioData from '../../../shared/data/portfolioData.js'

const { habilidades } = portfolioData

function SkillBar({ porcentaje }) {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const frame = requestAnimationFrame(() => setWidth(porcentaje))
    return () => cancelAnimationFrame(frame)
  }, [porcentaje])

  return (
    <div className="h-3 w-full overflow-hidden rounded-full bg-slate-800">
      <div
        className="h-3 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 transition-all duration-1000 ease-out"
        style={{ width: `${width}%` }}
      />
    </div>
  )
}

function SkillCard({ tecnologia, porcentaje }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-lg shadow-slate-950/40 transition-all hover:-translate-y-1 hover:border-indigo-500/50 hover:shadow-indigo-500/10">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="font-semibold text-white">{tecnologia}</h3>
        <span className="text-sm font-medium text-indigo-400">{porcentaje}%</span>
      </div>
      <SkillBar porcentaje={porcentaje} />
    </div>
  )
}

function SkillsView() {
  return (
    <div className="animate-fade-in flex flex-col gap-10">
      <header>
        <p className="text-sm font-medium uppercase tracking-widest text-indigo-400">Habilidades</p>
        <h1 className="mt-2 text-3xl font-bold text-white sm:text-4xl">Stack Técnico</h1>
        <p className="mt-3 max-w-2xl text-slate-300">
          Un resumen de las tecnologías con las que trabajo y mi nivel de dominio en cada una.
        </p>
      </header>

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {habilidades.map((skill) => (
          <SkillCard key={skill.tecnologia} {...skill} />
        ))}
      </section>
    </div>
  )
}

export default SkillsView
