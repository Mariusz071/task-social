import * as React from 'react'

import { history } from 'common/history'
import { Post } from 'api'
import './WallPost.scss'

interface Props {
  post: Post
}

export const WallPost: React.FC<Props> = ({ post }) => {
  const pathname = history.location.pathname
  const navigateToPost = () => history.push(`${pathname}/${post.id}`)

  return (
    <div className='post' onClick={navigateToPost}>
      <p className='post__user-id'>UserId: {post.userId}</p>
      <p className='post__title'>Title: {post.title}</p>
    </div>
  )
}
