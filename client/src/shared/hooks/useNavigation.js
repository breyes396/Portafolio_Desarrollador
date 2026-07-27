import { useCallback, useState } from 'react'

export function useNavigation(initialSection = 'home') {
  const [activeSection, setActiveSection] = useState(initialSection)

  const navigate = useCallback((section) => {
    setActiveSection(section)
  }, [])

  return { activeSection, navigate }
}
