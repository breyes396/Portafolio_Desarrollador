import { useState } from 'react'
import portfolioData from '../../../../shared/data/portfolioData.js'
import Button from '../../../../shared/components/Button.jsx'
import ContactModal from '../../../../shared/components/ContactModal.jsx'
import SectionTitle from '../../../../shared/components/SectionTitle.jsx'
import SocialLink from '../../../../shared/components/SocialLink.jsx'
import { IconEnvelope, IconGithub, IconLinkedin } from '../../../../shared/components/icons/index.jsx'

const { redes } = portfolioData

function ContactSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section className="w-full bg-gradient-to-br from-zinc-900 to-indigo-950 px-6 py-24 text-center md:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionTitle title="Contáctame" centered />

        <p className="mx-auto max-w-xl text-zinc-300">
          ¿Tienes un proyecto en mente o una oportunidad de colaboración? Escríbeme, con gusto conversamos.
        </p>

        <div className="mt-6 flex justify-center">
          <Button onClick={() => setIsModalOpen(true)} icon={<IconEnvelope className="h-5 w-5" />}>
            Enviar un correo
          </Button>
        </div>

        <div className="mt-8 flex items-center justify-center gap-4">
          <SocialLink href={redes.linkedin} label="LinkedIn" icon={<IconLinkedin className="h-5 w-5" />} />
          <SocialLink href={redes.github} label="GitHub" icon={<IconGithub className="h-5 w-5" />} />
        </div>
      </div>

      {isModalOpen && <ContactModal onClose={() => setIsModalOpen(false)} />}
    </section>
  )
}

export default ContactSection
