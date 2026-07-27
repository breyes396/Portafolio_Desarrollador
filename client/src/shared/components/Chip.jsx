function Chip({ children }) {
  return (
    <span className="rounded-full bg-indigo-900/50 px-3 py-1 text-xs font-medium text-indigo-300">
      {children}
    </span>
  )
}

export default Chip
