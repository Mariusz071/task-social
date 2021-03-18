import * as React from 'react'

import './InputField.scss'

interface Props {
  label: string
  value: string
  id: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const InputField: React.FC<Props> = ({ label, value, id, onChange }) => (
  <div className='input-field'>
    <label className='input-field__label' htmlFor={id}>
      {label}
    </label>
    <input
      id={id}
      placeholder='Enter your username'
      onChange={onChange}
      value={value}
      className='input-field__input'
    />
  </div>
)
