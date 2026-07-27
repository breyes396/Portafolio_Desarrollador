import portfolioData from '../../../shared/data/portfolioData.js'
import Chip from '../../../shared/components/Chip.jsx'
import TimelineItem from '../../../shared/components/TimelineItem.jsx'
import {
  IconBook,
  IconBriefcase,
  IconCalendar,
  IconEnvelope,
  IconUser,
} from '../../../shared/components/icons/index.jsx'

const { perfil, datosGenerales, educacionTimeline, experiencia } = portfolioData

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

function AboutView() {
  return (
    <div className="w-full bg-zinc-950 px-6 py-24 md:px-12">
      <div className="animate-fade-in mx-auto flex max-w-7xl flex-col gap-14">
        <header>
          <p className="text-sm font-medium uppercase tracking-widest text-indigo-400">Sobre Mí</p>
          <h1 className="mt-2 font-science text-3xl text-white sm:text-4xl">{perfil.nombre}</h1>
        </header>

        <section className="rounded-3xl border border-indigo-500/30 bg-zinc-900/60 p-8 sm:p-10">
          <p className="max-w-3xl text-lg leading-relaxed text-zinc-300">{perfil.descripcionDetallada}</p>

          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            <div>
              <h3 className="font-oswald tracking-wide text-white">Metas</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-300">{perfil.metas}</p>
            </div>
            <div>
              <h3 className="font-oswald tracking-wide text-white">Capacidades</h3>
              <ul className="mt-2 flex flex-wrap gap-2">
                {perfil.capacidades.map((capacidad) => (
                  <li key={capacidad}>
                    <Chip>{capacidad}</Chip>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4 font-science text-lg text-white">Datos Generales</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            <InfoItem icon={<IconUser className="h-5 w-5" />} label="Nombre" value={perfil.nombre} />
            <InfoItem icon={<IconCalendar className="h-5 w-5" />} label="Edad" value={datosGenerales.edad} />
            <InfoItem icon={<IconEnvelope className="h-5 w-5" />} label="Contacto" value={datosGenerales.correo} />
            <InfoItem
              icon={<IconBook className="h-5 w-5" />}
              label="Formación"
              value={datosGenerales.formacionActual}
            />
            <InfoItem
              icon={<IconBriefcase className="h-5 w-5" />}
              label="Años desarrollando"
              value={datosGenerales.aniosExperiencia}
            />
          </div>
        </section>

        <section>
          <h2 className="mb-6 font-science text-lg text-white">Educación y Experiencia</h2>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-8">
            <div>
              <h3 className="mb-6 font-oswald text-sm uppercase tracking-widest text-indigo-400">Educación</h3>
              {educacionTimeline.map((item, index) => (
                <TimelineItem
                  key={item.anio}
                  icon={<IconBook className="h-5 w-5" />}
                  tag={item.anio}
                  title={item.titulo}
                  subtitle={item.descripcion}
                  isLast={index === educacionTimeline.length - 1}
                />
              ))}
            </div>

            <div>
              <h3 className="mb-6 font-oswald text-sm uppercase tracking-widest text-indigo-400">
                Experiencia y Proyectos
              </h3>
              {experiencia.map((item, index) => (
                <TimelineItem
                  key={item.titulo}
                  icon={<IconBriefcase className="h-5 w-5" />}
                  tag={item.contexto ?? 'Proyecto'}
                  title={`${item.titulo} — ${item.organizacion}`}
                  subtitle={item.descripcion}
                  isLast={index === experiencia.length - 1}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default AboutView
