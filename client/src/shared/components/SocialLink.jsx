function SocialLink({ href, label, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-zinc-800 text-zinc-400 transition-colors hover:border-indigo-500/50 hover:text-indigo-400"
    >
      {icon}
    </a>
  )
}

export default SocialLink
