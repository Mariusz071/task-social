import * as React from 'react'
import { history } from 'common/history'
import { useSessionStorage } from 'common/hooks'

import { InputField } from 'components/inputField'
import { Button } from 'components/button'
import { ErrorMessage } from 'components/errorMessage'

import { FormErrors } from './types'

import { validate } from './utils'

import './LoginPage.scss'

const initialErrorsState = {
  username: [],
  password: [],
}

export const LoginPage: React.FC = props => {
  const [username, setName] = useSessionStorage('username')
  const [password, setPassword] = useSessionStorage('userpassword')
  const [errors, setErrors] = React.useState<FormErrors>(initialErrorsState)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setter: React.Dispatch<React.SetStateAction<string>>,
  ): void => {
    setter(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    const err = validate(username, password)
    setErrors(err)

    if (err.password.length || err.username.length) {
      return
    }

    history.push(`/${username}`)
  }

  return (
    <div className='login'>
      <div className='login__form-container'>
        <form className='login__form' onSubmit={handleSubmit}>
          <fieldset className='login__fields'>
            <div className='login__field-group'>
              <InputField
                onChange={e => handleChange(e, setName)}
                label='Username'
                value={username}
                id='username'
              />
              {errors.username.map((error, idx) => (
                <ErrorMessage key={idx} error={error} />
              ))}
            </div>

            <div className='login__field-group'>
              <InputField
                onChange={e => handleChange(e, setPassword)}
                label='Password'
                value={password}
                id='password'
              />
              {errors.password.map((error, idx) => (
                <ErrorMessage key={idx} error={error} />
              ))}
            </div>
          </fieldset>
          <Button type='submit' label='Login' />
        </form>
      </div>
    </div>
  )
}
