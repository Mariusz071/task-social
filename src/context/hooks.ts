import { useState, useEffect } from 'react'

import { PostsResponse } from '../screens/wallPage/types'
import { fetchPosts } from 'api'

export const useFetchPosts = (postId?: number) => {
  const [state, setState] = useState<any>(null)

  useEffect(() => {
    const getPosts = async () => {
      const posts = (await fetchPosts(postId)) as PostsResponse

      setState(posts)
    }

    getPosts()
  }, [postId])

  return state
}
