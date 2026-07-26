import portfolioData from '../../../shared/data/portfolioData.js'

const { perfil, datosGenerales, experiencia } = portfolioData
const tutoria = experiencia[0]

function IconCalendar(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
      />
    </svg>
  )
}

function IconEnvelope(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
      />
    </svg>
  )
}

function IconBook(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
      />
    </svg>
  )
}

function IconBriefcase(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20.25 14.15v4.25a2 2 0 0 1-2 2H5.75a2 2 0 0 1-2-2v-4.25m16.5 0a2 2 0 0 0-2-2H5.75a2 2 0 0 0-2 2m16.5 0V8.5a2 2 0 0 0-2-2h-3.5V5a1.5 1.5 0 0 0-1.5-1.5h-2.5A1.5 1.5 0 0 0 9.25 5v1.5h-3.5a2 2 0 0 0-2 2v5.65"
      />
    </svg>
  )
}

function InfoItem({ icon, label, value }) {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400">
        {icon}
      </span>
      <div className="min-w-0">
        <p className="text-xs font-medium uppercase tracking-wide text-slate-400">{label}</p>
        <p className="mt-1 break-words text-sm text-slate-200">{value}</p>
      </div>
    </div>
  )
}

function TimelineItem({ icon, tag, title, subtitle, isLast }) {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-indigo-500/40 bg-slate-950 text-indigo-400">
          {icon}
        </span>
        {!isLast && <span className="mt-1 w-px flex-1 bg-slate-800" />}
      </div>
      <div className={isLast ? 'pb-1' : 'pb-10'}>
        <p className="text-xs font-semibold uppercase tracking-wide text-indigo-400">{tag}</p>
        <h3 className="mt-1 font-semibold text-white">{title}</h3>
        <p className="mt-1 text-sm leading-relaxed text-slate-300">{subtitle}</p>
      </div>
    </div>
  )
}

function AboutView() {
  return (
    <div className="animate-fade-in flex flex-col gap-14">
      <header>
        <p className="text-sm font-medium uppercase tracking-widest text-indigo-400">Sobre Mí</p>
        <h1 className="mt-2 text-3xl font-bold text-white sm:text-4xl">{perfil.nombre}</h1>
      </header>

      <section className="rounded-3xl border border-indigo-500/30 bg-slate-900/60 p-8 sm:p-10">
        <p className="max-w-3xl text-lg leading-relaxed text-slate-300">{perfil.extracto}</p>
      </section>

      <section>
        <h2 className="mb-4 text-lg font-semibold text-white">Datos Generales</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <InfoItem icon={<IconCalendar className="h-5 w-5" />} label="Edad" value={datosGenerales.edad} />
          <InfoItem icon={<IconEnvelope className="h-5 w-5" />} label="Correo" value={datosGenerales.correo} />
          <InfoItem icon={<IconBook className="h-5 w-5" />} label="Educación" value={datosGenerales.educacion} />
        </div>
      </section>

      <section>
        <h2 className="mb-6 text-lg font-semibold text-white">Experiencia y Formación</h2>
        <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8">
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

        <blockquote className="mt-6 rounded-2xl border border-indigo-500/20 bg-indigo-500/5 p-6 text-sm italic leading-relaxed text-slate-300">
          “{tutoria.agradecimiento}”
        </blockquote>
      </section>
    </div>
  )
}

export default AboutView
