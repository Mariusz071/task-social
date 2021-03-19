import * as React from 'react'

import './InputField.scss'

interface Props {
  value: string
  id: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  label?: string
  placeholder?: string
}

export const InputField: React.FC<Props> = ({
  label,
  value,
  id,
  onChange,
  placeholder,
}) => (
  <div className='input-field'>
    {label && (
      <label className='input-field__label' htmlFor={id}>
        {label}
      </label>
    )}
    <input
      id={id}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      className='input-field__input'
    />
  </div>
)
