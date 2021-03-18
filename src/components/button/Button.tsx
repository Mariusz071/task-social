import * as React from 'react'

import './Button.scss'

interface Props {
  label: string
  onClick?: (e: React.MouseEvent<HTMLElement>) => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

export const Button: React.FC<Props> = ({
  label,
  type = 'button',
  onClick,
  disabled,
}) => {
  return (
    <button className='btn' type={type} onClick={onClick} disabled={disabled}>
      {label}
    </button>
  )
}
