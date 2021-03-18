import * as React from 'react'

import './ErrorMessage.scss'

interface Props {
  error: string
}

export const ErrorMessage: React.FC<Props> = ({ error }) => {
  return (
    <div className='error'>
      <span>{error}</span>
    </div>
  )
}
