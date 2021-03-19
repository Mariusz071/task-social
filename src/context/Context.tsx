import * as React from 'react'

import { useFetchPosts } from 'context/hooks'
import { useSessionStorage } from 'common/hooks'

export const Context = React.createContext({
  posts: [],
})

interface Props {
  children: JSX.Element | JSX.Element[]
}
export const ContextProvider: React.FC<Props> = ({ children }) => {
  const [username] = useSessionStorage('username')

  const userData = { username }
  const posts = useFetchPosts()

  const value = { posts, userData }

  return <Context.Provider value={value}>{children}</Context.Provider>
}
