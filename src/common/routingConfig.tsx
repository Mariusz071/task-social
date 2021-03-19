import { LoginPage } from 'screens/loginPage'
import { PostPage } from 'screens/postPage'
import { WallPage } from 'screens/wallPage'
import { ContextProvider } from 'context'

import { RoutingConfig } from './types'

export const routingConfig: RoutingConfig = [
  {
    path: '/',
    id: 'login',
    exact: true,
    component: LoginPage,
  },
  {
    path: '/:username',
    id: 'wall',
    exact: true,
    component: () => (
      <ContextProvider>
        <WallPage />
      </ContextProvider>
    ),
  },
  {
    path: '/:username/:id',
    id: 'post',
    exact: true,
    component: PostPage,
  },
]
