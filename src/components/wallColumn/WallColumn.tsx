import * as React from 'react'

import { Post } from 'api'
import { WallPost } from 'components/wallPost'
import { Spinner } from 'components/icons'

import './WallColumn.scss'

interface Props {
  posts: Post[]
}

export const WallColumn: React.FC<Props> = ({ posts }) => {
  return (
    <div className='column'>
      {!posts.length && (
        <div className='column__loading'>
          <Spinner color='#25282b' height='100' width='100' />{' '}
        </div>
      )}

      {posts.map(post => {
        return <WallPost key={post.id} post={post} />
      })}
    </div>
  )
}
