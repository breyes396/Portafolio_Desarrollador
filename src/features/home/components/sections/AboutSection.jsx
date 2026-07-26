import Button from '../../../../shared/components/Button.jsx'
import SectionTitle from '../../../../shared/components/SectionTitle.jsx'
import {
  IconArrowRight,
  IconBook,
  IconCalendar,
  IconEnvelope,
  IconUser,
} from '../../../../shared/components/icons/index.jsx'

function InfoItem({ icon, label, value }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-950/40 p-4">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-400">
        {icon}
      </span>
      <div className="min-w-0">
        <p className="text-xs font-medium uppercase tracking-wide text-zinc-400">{label}</p>
        <p className="truncate text-sm text-zinc-200">{value}</p>
      </div>
    </div>
  )
}

function AboutSection({ perfil, datosGenerales, onNavigate }) {
  return (
    <section className="w-full bg-zinc-900 px-6 py-24 md:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionTitle icon={<IconBook className="h-5 w-5" />} title="Sobre Mí" />

        <p className="max-w-2xl text-zinc-300">{perfil.extracto}</p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <InfoItem icon={<IconUser className="h-4 w-4" />} label="Nombre" value={perfil.nombre} />
          <InfoItem icon={<IconCalendar className="h-4 w-4" />} label="Edad" value={datosGenerales.edad} />
          <InfoItem icon={<IconEnvelope className="h-4 w-4" />} label="Contacto" value={datosGenerales.correo} />
          <InfoItem icon={<IconBook className="h-4 w-4" />} label="Formación" value="6to Perito en Informática" />
        </div>

        <Button
          onClick={() => onNavigate('about')}
          icon={<IconArrowRight className="h-4 w-4" />}
          iconPosition="right"
          className="mt-8"
        >
          Conóceme más
        </Button>
      </div>
    </section>
  )
}

export default AboutSection
