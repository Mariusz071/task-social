import { Dispatch, SetStateAction } from 'react'

export interface RouteElement {
  path: string
  id: string
  component: React.FC
  exact?: boolean
}

export declare type RoutingConfig = RouteElement[]

export declare type UseSessionStorage = [
  string,
  Dispatch<SetStateAction<string>>,
]
