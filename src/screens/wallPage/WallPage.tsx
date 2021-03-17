import * as React from 'react'

import './WallPage.scss'

export const WallPage: React.FC = props => {
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
