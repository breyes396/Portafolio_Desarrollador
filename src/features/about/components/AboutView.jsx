import portfolioData from '../../../shared/data/portfolioData.js'
import { IconBook, IconBriefcase, IconCalendar, IconEnvelope } from '../../../shared/components/icons/index.jsx'

const { perfil, datosGenerales, experiencia } = portfolioData
const tutoria = experiencia[0]

function InfoItem({ icon, label, value }) {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400">
        {icon}
      </span>
      <div className="min-w-0">
        <p className="text-xs font-medium uppercase tracking-wide text-zinc-400">{label}</p>
        <p className="mt-1 break-words text-sm text-zinc-200">{value}</p>
      </div>
    </div>
  )
}

function TimelineItem({ icon, tag, title, subtitle, isLast }) {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-indigo-500/40 bg-zinc-950 text-indigo-400">
          {icon}
        </span>
        {!isLast && <span className="mt-1 w-px flex-1 bg-zinc-800" />}
      </div>
      <div className={isLast ? 'pb-1' : 'pb-10'}>
        <p className="text-xs font-semibold uppercase tracking-wide text-indigo-400">{tag}</p>
        <h3 className="mt-1 font-oswald tracking-wide text-white">{title}</h3>
        <p className="mt-1 text-sm leading-relaxed text-zinc-300">{subtitle}</p>
      </div>
    </div>
  )
}

function AboutView() {
  return (
    <div className="w-full bg-zinc-950 px-6 py-24 md:px-12">
      <div className="animate-fade-in mx-auto flex max-w-7xl flex-col gap-14">
        <header>
          <p className="text-sm font-medium uppercase tracking-widest text-indigo-400">Sobre Mí</p>
          <h1 className="mt-2 font-science text-3xl text-white sm:text-4xl">{perfil.nombre}</h1>
        </header>

        <section className="rounded-3xl border border-indigo-500/30 bg-zinc-900/60 p-8 sm:p-10">
          <p className="max-w-3xl text-lg leading-relaxed text-zinc-300">{perfil.extracto}</p>
        </section>

        <section>
          <h2 className="mb-4 font-science text-lg text-white">Datos Generales</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <InfoItem icon={<IconCalendar className="h-5 w-5" />} label="Edad" value={datosGenerales.edad} />
            <InfoItem icon={<IconEnvelope className="h-5 w-5" />} label="Correo" value={datosGenerales.correo} />
            <InfoItem icon={<IconBook className="h-5 w-5" />} label="Educación" value={datosGenerales.educacion} />
          </div>
        </section>

        <section>
          <h2 className="mb-6 font-science text-lg text-white">Experiencia y Formación</h2>
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-6 sm:p-8">
            <TimelineItem
              icon={<IconBook className="h-5 w-5" />}
              tag="Educación"
              title="Formación Técnica"
              subtitle={datosGenerales.educacion}
            />
            <TimelineItem
              icon={<IconBriefcase className="h-5 w-5" />}
              tag="Experiencia"
              title={`${tutoria.rol} · ${tutoria.area}`}
              subtitle={tutoria.descripcion}
              isLast
            />
          </div>

          <blockquote className="mt-6 rounded-2xl border border-indigo-500/20 bg-indigo-500/5 p-6 text-sm italic leading-relaxed text-zinc-300">
            “{tutoria.agradecimiento}”
          </blockquote>
        </section>
      </div>
    </div>
  )
}

export default AboutView
