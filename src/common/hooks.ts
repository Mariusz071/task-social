import { useState, useEffect } from 'react'
import { UseSessionStorage } from './types'

export const useSessionStorage = (key: string) => {
  const [state, setState] = useState(
    () => window.sessionStorage.getItem(key) || '',
  )

  useEffect(() => {
    window.sessionStorage.setItem(key, state)
  }, [key, state])

  return [state, setState] as UseSessionStorage
}
