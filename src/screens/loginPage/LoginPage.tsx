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
            <InputField
              onChange={e => handleChange(e, setName)}
              label='Username'
              value={username}
              id='username'
            />
            <InputField
              onChange={e => handleChange(e, setPassword)}
              label='Password'
              value={password}
              id='password'
            />
          </fieldset>
          <Button type='submit' label='Login' disabled={!isValid} />
        </form>
      </div>
    </div>
  )
}
