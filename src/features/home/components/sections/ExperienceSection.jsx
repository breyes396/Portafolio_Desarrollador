import Button from '../../../../shared/components/Button.jsx'
import SectionTitle from '../../../../shared/components/SectionTitle.jsx'
import TimelineItem from '../../../../shared/components/TimelineItem.jsx'
import {
  IconArrowRight,
  IconBook,
  IconBriefcase,
  IconDownload,
} from '../../../../shared/components/icons/index.jsx'

function ExperienceSection({ educacionTimeline, experiencia, onNavigate }) {
  return (
    <section className="w-full bg-zinc-900 px-6 py-24 md:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionTitle icon={<IconBriefcase className="h-5 w-5" />} title="Educación y Experiencia" />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-8">
          <div>
            <h3 className="mb-6 font-oswald text-sm uppercase tracking-widest text-indigo-400">Educación</h3>
            {educacionTimeline.map((item, index) => (
              <TimelineItem
                key={item.anio}
                icon={<IconBook className="h-5 w-5" />}
                tag={item.anio}
                title={item.titulo}
                subtitle={item.resumenHome}
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

        <div className="mt-10 flex flex-wrap gap-4">
          <Button
            onClick={() => onNavigate('about')}
            icon={<IconArrowRight className="h-4 w-4" />}
            iconPosition="right"
          >
            Conocer más trayectoria
          </Button>

          <Button icon={<IconDownload className="h-5 w-5" />} variant="outline">
            Descargar CV
          </Button>
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection
