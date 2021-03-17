import * as React from 'react'

import './LoginPage.scss'

export const LoginPage: React.FC = (props) => {
  return (
    <div className='login'>
      <h2>some login page</h2>
      <label htmlFor='username'>Username</label>
      <input name='username' placeholder='Enter your username'></input>

      <label htmlFor='password'>Password</label>
      <input name='password' placeholder='Enter your password'></input>
      <button>Login</button>
    </div>
  )
}
