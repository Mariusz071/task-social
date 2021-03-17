import * as React from 'react'
import { history } from 'common/history'
import { useSessionStorage } from 'common/hooks'
import './LoginPage.scss'

export const LoginPage: React.FC = props => {
  const [username, setName] = useSessionStorage('username')
  const [password, setPassword] = useSessionStorage('userpassword')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setter: React.Dispatch<React.SetStateAction<string>>,
  ): void => {
    setter(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    history.push(`/${username}`)
  }

  return (
    <div className='login'>
      <div className='login__form-container'>
        <form className='login__form' onSubmit={handleSubmit}>
          <fieldset className='login__fields'>
            <div className='login__field'>
              <label htmlFor='username'> </label>
              Username
              <input
                name='username'
                placeholder='Enter your username'
                onChange={e => handleChange(e, setName)}
                value={username}
              />
            </div>
            <div className='login__field'>
              <label htmlFor='password'> </label>
              Password
              <input
                name='password'
                placeholder='Enter your password'
                onChange={e => handleChange(e, setPassword)}
                value={password}
              />
            </div>
          </fieldset>
          <button className='btn login__form__submit' type='submit'>
            Login
          </button>
        </form>
      </div>
    </div>
  )
}
