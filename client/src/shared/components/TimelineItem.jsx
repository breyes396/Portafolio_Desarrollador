function TimelineItem({ icon, tag, title, subtitle, isLast }) {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-indigo-500/40 bg-zinc-950 text-indigo-400">
          {icon}
        </span>
        {!isLast && <span className="mt-1 w-px flex-1 bg-zinc-800" />}
      </div>
      <div className={isLast ? 'pb-1' : 'pb-8'}>
        <p className="text-xs font-semibold uppercase tracking-wide text-indigo-400">{tag}</p>
        <h3 className="mt-1 font-oswald tracking-wide text-white">{title}</h3>
        {subtitle && <p className="mt-1 text-sm leading-relaxed text-zinc-300">{subtitle}</p>}
      </div>
    </div>
  )
}

export default TimelineItem
