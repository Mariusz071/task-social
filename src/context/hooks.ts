import { useState, useEffect, useRef } from 'react'

import { PostResponse } from './types'
import { Post } from 'api'
import { fetchPost } from 'api'

const initialPostId = 1

export const useFetchPosts = (searchQuery: string): Post[] => {
  const [posts, setPosts] = useState<Post[]>([])
  const [postId, setPostId] = useState(initialPostId)
  const [shouldRun, setShouldRun] = useState<boolean>(true)

  const isFiltering = searchQuery !== ''

  useInterval(
    () => {
      fetchPost(postId)
        .then((post: PostResponse) => {
          setPosts([...posts, post.data])
          setPostId(postId + 1)
        })
        .catch(e => setShouldRun(false))
    },
    shouldRun && !isFiltering ? 1000 : null,
  )

  // console.log(posts, 123)
  return posts
}

const useInterval = (callback: () => void, delay: number | null) => {
  const prevCallback = useRef<() => void | null>()

  // remember the latest callback
  useEffect(() => {
    prevCallback.current = callback
  })

  // set up the interval
  useEffect(() => {
    const tick = () => {
      if (typeof prevCallback?.current !== 'undefined') {
        prevCallback?.current()
      }
    }

    if (delay !== null) {
      const intervalId = setInterval(tick, delay)
      return () => clearInterval(intervalId)
    }
  }, [delay])
}
