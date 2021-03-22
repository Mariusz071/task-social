import { Post } from 'api'
import { GroupedPosts } from './types'

export const sort = (posts: Post[]): GroupedPosts => {
  const col1: Post[] = []
  const col2: Post[] = []
  const col3: Post[] = []

  posts.forEach((post: Post, index: number) => {
    if (!posts.length) {
      return
    }

    if (index % 3 === 1) {
      col2.push(post)
    }

    if (index % 3 === 0) {
      col1.push(post)
    }

    if (index % 3 === 2) {
      col3.push(post)
    }
  })

  return { col1, col3, col2 }
}

export const filter = (posts: Post[], searchQuery: string): GroupedPosts => {
  const filteredPosts = posts.filter(
    post => post.title.includes(searchQuery) || post.body.includes(searchQuery),
  )

  return sort(filteredPosts)
}

export const initialSortedPosts = {
  col1: [],
  col2: [],
  col3: [],
}
