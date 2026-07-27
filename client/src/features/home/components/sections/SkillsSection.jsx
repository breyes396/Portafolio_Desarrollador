import Button from '../../../../shared/components/Button.jsx'
import ProgressBar from '../../../../shared/components/ProgressBar.jsx'
import SectionTitle from '../../../../shared/components/SectionTitle.jsx'
import { IconArrowRight, IconBolt } from '../../../../shared/components/icons/index.jsx'

function SkillsSection({ habilidades, onNavigate }) {
  return (
    <section className="w-full bg-zinc-950 px-6 py-24 md:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionTitle icon={<IconBolt className="h-5 w-5" />} title="Habilidades" />

        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {habilidades.map((skill) => (
            <div key={skill.nombre}>
              <div className="mb-2 flex items-center justify-between text-sm">
                <span className="font-medium text-zinc-200">{skill.nombre}</span>
                <span className="font-semibold text-indigo-400">{skill.porcentaje}%</span>
              </div>
              <ProgressBar percentage={skill.porcentaje} />
            </div>
          ))}
        </div>

        <Button
          onClick={() => onNavigate('skills')}
          icon={<IconArrowRight className="h-4 w-4" />}
          iconPosition="right"
          className="mt-10"
        >
          Ver detalle de habilidades
        </Button>
      </div>
    </section>
  )
}

export default SkillsSection
