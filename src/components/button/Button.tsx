import * as React from 'react'

import './Button.scss'

interface Props {
  label: string
  onClick?: (e: React.MouseEvent<HTMLElement>) => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  appearance?: 'regular' | 'long'
}

export const Button: React.FC<Props> = ({
  label,
  type = 'button',
  onClick,
  disabled,
  appearance = 'regular',
}) => {
  return (
    <button
      className={`btn btn--${appearance}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  )
}
