import { useEffect, useRef, useState } from 'react'

const TRANSITION_MS = 700

function ScrollReveal({ children, className = '' }) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [isSettled, setIsSettled] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return undefined
    const timeout = setTimeout(() => setIsSettled(true), TRANSITION_MS)
    return () => clearTimeout(timeout)
  }, [isVisible])

  const revealClasses = isSettled
    ? 'opacity-100'
    : `transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`

  return (
    <div ref={ref} className={`${revealClasses} ${className}`}>
      {children}
    </div>
  )
}

export default ScrollReveal
