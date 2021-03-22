import * as React from 'react'

import { Post } from 'api'
import { WallPost } from 'components/wallPost'
import { Spinner } from 'components/icons'
import { Context } from 'context'

import './WallColumn.scss'

interface Props {
  posts: Post[]
}

export const WallColumn: React.FC<Props> = ({ posts }) => {
  const context = React.useContext(Context)
  const { searchQuery } = context
  const isFiltering = searchQuery !== ''

  return (
    <div className='column'>
      {!posts.length && isFiltering && (
        <div className='column__loading'>
          <p className='column__info'>Nothing to display.</p>
        </div>
      )}

      {!posts.length && !isFiltering && (
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
