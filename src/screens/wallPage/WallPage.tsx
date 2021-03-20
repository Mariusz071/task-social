import * as React from 'react'

import { history } from 'common/history'
import './WallPage.scss'

const clearUserData = (keys: string[]) => {
  keys.forEach((key: string) => {
    window.sessionStorage.setItem(key, '')
  })
export const WallPage: React.FC = props => {
  const onLogout = () => {
    clearUserData(['username', 'password'])
    history.push('/')
  }
  return (
    <div className='wall'>
      <nav className='wall__nav'>
        <button className='btn wall__logout'>Logout</button>
        <input className='wall__search' placeholder='Search'></input>
      </nav>
      <main className='wall__main'>
        <div>some posts</div>
        <div>more posts</div>
        <div>even more posts</div>
      </main>
    </div>
  )
}
