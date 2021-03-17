import * as React from 'react'
import './Layout.scss'

interface Props {
  children: React.ReactChild
}

export const Layout: React.FC<Props> = ({ children }) => (
  <div className='layout'>{children}</div>
)
