import { PostPage } from 'screens/postPage'
import { WallPage } from 'screens/wallPage'

import { RoutingConfig } from './types'

export const routingConfig: RoutingConfig = [
  {
    path: '/wall/:username',
    id: 'wall',
    exact: true,
    component: WallPage,
  },
  {
    path: '/wall/:username/:postId',
    id: 'post',
    exact: true,
    component: PostPage,
  },
]
