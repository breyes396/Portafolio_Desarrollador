import Button from '../../../../shared/components/Button.jsx'
import SectionTitle from '../../../../shared/components/SectionTitle.jsx'
import SocialLink from '../../../../shared/components/SocialLink.jsx'
import { IconEnvelope, IconGithub, IconLinkedin } from '../../../../shared/components/icons/index.jsx'

const CONTACT_EMAIL = 'billyrey3645@gmail.com'

function ContactSection() {
  return (
    <section className="w-full bg-gradient-to-br from-zinc-900 to-indigo-950 px-6 py-24 text-center md:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionTitle title="Contáctame" centered />

        <p className="mx-auto max-w-xl text-zinc-300">
          ¿Tienes un proyecto en mente o una oportunidad de colaboración? Escríbeme, con gusto conversamos.
        </p>

        <div className="mt-6 flex justify-center">
          <Button href={`mailto:${CONTACT_EMAIL}`} external={false} icon={<IconEnvelope className="h-5 w-5" />}>
            Enviar un correo
          </Button>
        </div>

        <div className="mt-8 flex items-center justify-center gap-4">
          <SocialLink href="#" label="LinkedIn" icon={<IconLinkedin className="h-5 w-5" />} />
          <SocialLink href="#" label="GitHub" icon={<IconGithub className="h-5 w-5" />} />
        </div>
      </div>
    </section>
  )
}

export default ContactSection
