function Card({ children, className = '' }) {
  return (
    <div
      className={`rounded-2xl border border-zinc-800 bg-zinc-900/60 shadow-lg shadow-black/40 transition-all hover:-translate-y-1 hover:border-indigo-500/50 hover:shadow-indigo-500/10 ${className}`}
    >
      {children}
    </div>
  )
}

export default Card
