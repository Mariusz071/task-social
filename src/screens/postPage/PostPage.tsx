import * as React from 'react'
import { RouteComponentProps } from 'react-router-dom'

import { history } from 'common/history'
import { Button } from 'components/button'
import { Context } from 'context'
import { Spinner } from 'components/icons'
import { MatchParams } from 'common/types'

import { Post } from 'api'

import './PostPage.scss'

interface Props {
  post: Post
}

export const PostPage: React.FC<
  Props & RouteComponentProps<MatchParams>
> = props => {
  const context = React.useContext(Context)
  const posts = context.posts
  const { username, postId } = props.match.params

  const numberifiedId = parseInt(postId)

  const post = posts.find(post => post.id === numberifiedId)

  const navigateToWall = () => history.replace(`/wall/${username}`)

  return (
    <div className='post-page page-container'>
      <Button label='Go Back' appearance='long' onClick={navigateToWall} />

      {post ? (
        <>
          <div className='post-page__heading'>
            <h2>Details</h2>
          </div>
          <div className='post-page__description'>
            <p>User id: 1</p>
            <p>Id: user123</p>
            <p>
              Title: <span>blah blah blah</span>
            </p>
          </div>
          <div className='post-page__text'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci
            voluptatum pariatur, ab enim praesentium ut repellat. Mollitia
            facere quis exercitationem adipisci, omnis quisquam quos eum sint,
            natus dolore ex quaerat. Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Nisi, magni ipsum incidunt quisquam, ducimus
            adipisci voluptatem minus omnis aut, molestias ipsa aliquam?
            Distinctio quo, ducimus repellendus inventore reprehenderit rem
            neque?
          </div>
        </>
      ) : (
        <>
          <div className='post-page__heading'>
            <h2>Loading...</h2>
          </div>
          <div className='column__loading'>
            <Spinner color=' #dfdfe1' height='100' width='100' />
          </div>
        </>
      )}
    </div>
  )
}
