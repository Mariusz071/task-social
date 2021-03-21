import { LoginPage } from 'screens/loginPage'
import { PostPage } from 'screens/postPage'
import { WallPage } from 'screens/wallPage'
import { ContextProvider } from 'context'

import { RoutingConfig } from './types'

export const routingConfig: RoutingConfig = [
  {
    path: '/:username',
    id: 'wall',
    exact: true,
    component: WallPage,
  },
  {
    path: '/:username/:postId',
    id: 'post',
    exact: true,
    component: PostPage,
  },
]
