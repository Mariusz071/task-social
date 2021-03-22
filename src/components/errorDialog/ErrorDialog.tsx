import * as React from 'react'
import { FallbackProps } from 'react-error-boundary'

import { Button } from 'components/button'

import { clearUserData } from 'common/utils'
import { history } from 'common/history'

import './ErrorDialog.scss'

export const ErrorDialog: React.ComponentType<FallbackProps> = ({
  error,
  resetErrorBoundary,
}) => {
  const goToLoginHandler = (): void => {
    clearUserData(['username', 'password'])
    history.replace('/')
  }

  return (
    <div className='error-fallback'>
      <div className='error-fallback__overlay'>
        <div className='error-fallback__dialog'>
          <div className='error-fallback__content'>
            There was an error: <pre>{error.message}</pre>
          </div>
          <div className='error-fallback__actions'>
            <Button label='Try again' onClick={resetErrorBoundary} />
            <Button label='Go to login page' onClick={goToLoginHandler} />
          </div>
        </div>
      </div>
    </div>
  )
}
