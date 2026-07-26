import Button from '../../../../shared/components/Button.jsx'
import Card from '../../../../shared/components/Card.jsx'
import SectionTitle from '../../../../shared/components/SectionTitle.jsx'
import {
  IconArrowRight,
  IconBook,
  IconBriefcase,
  IconDownload,
} from '../../../../shared/components/icons/index.jsx'

function ExperienceSection({ datosGenerales, experiencia, onNavigate }) {
  const tutoria = experiencia[0]

  return (
    <section className="w-full bg-zinc-900 px-6 py-24 md:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionTitle icon={<IconBriefcase className="h-5 w-5" />} title="Educación y Experiencia" />

        <div className="grid gap-6 sm:grid-cols-2">
          <Card className="p-6">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400">
              <IconBook className="h-5 w-5" />
            </span>
            <h3 className="mt-4 font-oswald tracking-wide text-white">Formación Técnica</h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-300">{datosGenerales.educacion}</p>
          </Card>

          <Card className="p-6">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400">
              <IconBriefcase className="h-5 w-5" />
            </span>
            <h3 className="mt-4 font-oswald tracking-wide text-white">
              {tutoria.rol} · {tutoria.area}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-300">{tutoria.descripcion}</p>
          </Card>
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
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
