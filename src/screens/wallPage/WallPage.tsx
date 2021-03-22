import * as React from 'react'

import { Button } from 'components/button'
import { InputField } from 'components/inputField'
import { WallColumn } from 'components/wallColumn'

import { history } from 'common/history'
import { Context } from 'context'
import { Post } from 'api'

import './WallPage.scss'

const clearUserData = (keys: string[]) => {
  keys.forEach((key: string) => {
    window.sessionStorage.setItem(key, '')
  })
}

interface SortedPosts {
  col1: Post[]
  col2: Post[]
  col3: Post[]
}

const initialSortedPosts = {
  col1: [],
  col2: [],
  col3: [],
}
export const WallPage: React.FC = props => {
  const [sortedPosts, setSortedPosts] = React.useState<SortedPosts>(
    initialSortedPosts,
  )
  const [searchQuery, setSearchQuery] = React.useState<string>(
    'random search post',
  )

  const context = React.useContext(Context)

  const { posts } = context

  React.useEffect(() => {
    const sort = () => {
      const col1: Post[] = []
      const col2: Post[] = []
      const col3: Post[] = []

      posts.forEach((post: Post) => {
        if (!posts.length) {
          return
        }

        if (post.id % 3 === 1) {
          col1.push(post)
        }

        if (post.id % 3 === 0) {
          col3.push(post)
        }

        if (post.id % 3 === 2) {
          col2.push(post)
        }
      })

      return { col1, col2, col3 }
    }

    setSortedPosts(sort())
  }, [posts])

  const onLogout = () => {
    clearUserData(['username', 'password'])
    history.push('/')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  return (
    <div className='wall page-container'>
      <nav className='wall__nav'>
        <Button label='Logout' type='button' onClick={onLogout} />
        <InputField
          placeholder='Search'
          value={searchQuery}
          id='search'
          onChange={handleChange}
        />
      </nav>
      <main className='wall__main'>
        <WallColumn posts={sortedPosts.col1} />
        <WallColumn posts={sortedPosts.col2} />
        <WallColumn posts={sortedPosts.col3} />
      </main>
    </div>
  )
}
