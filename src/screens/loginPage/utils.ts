import { FormErrors } from './types'

export const validate = (username: string, password: string): FormErrors => {
  const errors: FormErrors = {
    username: [],
    password: [],
  }

  const hasUppercaseLetter = password.match(/[A-Z]/g)?.length
  const hasNumber = password.match(/[0-9]/g)?.length
  const minUsernameLength = 5
  const minPasswordLength = 8

  if (username.length < minUsernameLength) {
    errors.username.push(
      `Username must contain at least ${minUsernameLength} characters.`,
    )
  }

  if (password.length < minPasswordLength) {
    errors.password.push(
      `Password must contain at least ${minUsernameLength} characters.`,
    )
  }

  if (!hasUppercaseLetter) {
    errors.password.push('Password must contain at least 1 upper case letter.')
  }

  if (!hasNumber) {
    errors.password.push('Password must contain at least 1 number.')
  }

  return errors
}
