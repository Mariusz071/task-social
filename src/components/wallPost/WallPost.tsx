import * as React from 'react'

import { Post } from 'api'
import './WallPost.scss'

interface Props {
  post: Post
}

export const WallPost: React.FC<Props> = ({ post }) => {
  return (
    <div className='post'>
      <p>NUMBER {post.id}</p>
      <p className='post__user-id'>UserId: {post.userId}</p>
      <p className='post__title'>Title: {post.title}</p>
    </div>
  )
}
