function SectionTitle({ icon, title, subtitle, centered = false }) {
  return (
    <div className={`mb-8 ${centered ? 'flex flex-col items-center text-center' : ''}`}>
      <div className={`mb-3 flex items-center gap-3 ${centered ? 'justify-center' : ''}`}>
        {icon && (
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400">
            {icon}
          </span>
        )}
        <h2 className="font-science text-3xl font-semibold text-white sm:text-4xl">{title}</h2>
      </div>
      {subtitle && (
        <p className={`text-zinc-400 ${centered ? 'mx-auto max-w-xl' : 'max-w-2xl'}`}>{subtitle}</p>
      )}
    </div>
  )
}

export default SectionTitle
