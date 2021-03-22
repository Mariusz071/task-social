import { useState, useEffect, useRef } from 'react'

import { PostResponse } from './types'
import { Post } from 'api'
import { fetchPost } from 'api'

const initialPostId = 1
const MAX_POSTS_NUMBER = 100

export const useFetchPosts = (searchQuery: string): Post[] => {
  const [posts, setPosts] = useState<Post[]>([])
  const [postId, setPostId] = useState(initialPostId)
  const [shouldRun, setShouldRun] = useState<boolean>(true)
  const [, setError] = useState(null)

  const isFiltering = searchQuery !== ''

  useInterval(
    () => {
      fetchPost(postId)
        .then((post: PostResponse) => {
          setPosts([...posts, post.data])
          setPostId(postId + 1)
        })
        .catch(e => {
          setShouldRun(false)

          //hack to make error boundary catch the error from custom hook - couldt figure out  a better way
          setError(() => {
            throw e
          })
        })
    },
    //todo figure out other way to stop fetching posts after last one is fetched
    shouldRun && !isFiltering && postId <= MAX_POSTS_NUMBER ? 1000 : null,
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
