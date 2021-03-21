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

export const WallPage: React.FC = props => {
  const [col1, setCol1] = React.useState<Post[]>([])
  const [col2, setCol2] = React.useState<Post[]>([])
  const [col3, setCol3] = React.useState<Post[]>([])

  const [searchQuery, setSearchQuery] = React.useState<string>(
    'random search post',
  )

  const context = React.useContext(Context)

  const { posts } = context

  React.useEffect(() => {
    const lastPost = posts[posts.length - 1]

    if (!lastPost) {
      return
    }

    if (lastPost.id % 3 === 1) {
      return setCol1([...col1, lastPost])
    }

    if (lastPost.id % 3 === 0) {
      return setCol3([...col3, lastPost])
    }

    if (lastPost.id % 3 === 2) {
      return setCol2([...col2, lastPost])
    }
  }, [posts])

  const onLogout = () => {
    clearUserData(['username', 'password'])
    history.push('/')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  return (
    <div className='wall'>
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
        <WallColumn posts={col1} />
        <WallColumn posts={col2} />
        <WallColumn posts={col3} />
      </main>
    </div>
  )
}
