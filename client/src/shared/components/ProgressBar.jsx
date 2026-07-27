import { useEffect, useRef, useState } from 'react'

function ProgressBar({ percentage }) {
  const [width, setWidth] = useState(0)
  const trackRef = useRef(null)

  useEffect(() => {
    const node = trackRef.current
    if (!node) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setWidth(percentage)
          observer.disconnect()
        }
      },
      { threshold: 0.3 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [percentage])

  return (
    <div ref={trackRef} className="h-2 w-full overflow-hidden rounded-full bg-zinc-800">
      <div
        className="h-2 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 transition-all duration-1000 ease-out"
        style={{ width: `${width}%` }}
      />
    </div>
  )
}

export default ProgressBar
