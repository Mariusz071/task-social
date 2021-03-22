import * as React from 'react'

import { Button } from 'components/button'
import { InputField } from 'components/inputField'
import { WallColumn } from 'components/wallColumn'

import { history } from 'common/history'
import { Context } from 'context'
import { sort, filter, initialSortedPosts } from './utils'
import { clearUserData } from 'common/utils'

import { GroupedPosts } from './types'

import './WallPage.scss'

export const WallPage: React.FC = props => {
  const [sortedPosts, setSortedPosts] = React.useState<GroupedPosts>(
    initialSortedPosts,
  )

  const context = React.useContext(Context)

  const { posts, searchQuery, setSearchQuery } = context

  React.useEffect(() => {
    if (searchQuery !== '') {
      setSortedPosts(filter(posts, searchQuery))
    }
  }, [searchQuery, posts])

  React.useEffect(() => {
    setSortedPosts(sort(posts))
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
