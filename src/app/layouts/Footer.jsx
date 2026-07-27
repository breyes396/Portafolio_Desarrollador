import SocialLink from '../../shared/components/SocialLink.jsx'
import { IconGithub, IconLinkedin } from '../../shared/components/icons/index.jsx'

function Footer() {
  return (
    <footer className="border-t border-zinc-900 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-zinc-400">
          © {new Date().getFullYear()} Billy Reyes. Todos los derechos reservados.
        </p>

        <div className="flex items-center gap-4">
          <SocialLink href="#" label="LinkedIn" icon={<IconLinkedin className="h-5 w-5" />} />
          <SocialLink href="#" label="GitHub" icon={<IconGithub className="h-5 w-5" />} />
        </div>
      </div>
    </footer>
  )
}

export default Footer
