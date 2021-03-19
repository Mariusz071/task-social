import axios from 'axios'

import { Post } from './types'

const BASE_URL = 'https://jsonplaceholder.typicode.com/posts'

export const fetchPosts = (postId?: number) =>
  axios.get<Post[]>(`${BASE_URL}/${postId ? postId : ''}`)
