import { useState, useEffect, useRef } from 'react'

import { PostsResponse } from '../screens/wallPage/types'
import { Post } from 'api/types'
import { fetchPost } from 'api'

const initialPostId = 1

export const useFetchPosts = (): Post[] => {
  const [posts, setPosts] = useState<Post[]>([])
  const [postId, setPostId] = useState(initialPostId)
  const [shouldRun, setShouldRun] = useState<boolean>(true)

  useInterval(
    () => {
      fetchPost(postId)
        .then((post: PostsResponse) => {
          setPosts([...posts, post.data])
          setPostId(postId + 1)
        })
        .catch(e => setShouldRun(false))
    },
    shouldRun ? 1000 : null,
  )

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
