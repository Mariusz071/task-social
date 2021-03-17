import { useState, useEffect } from 'react'
import { UseSessionStorage } from './types'

export const useSessionStorage = (key: string) => {
  const [state, setState] = useState('')

  useEffect(() => {
    window.sessionStorage.setItem(key, state)
  }, [state, key])

  return [state, setState] as UseSessionStorage
}
