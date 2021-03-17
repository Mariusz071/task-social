import * as React from 'react'

import './PostPage.scss'

export const PostPage: React.FC = props => {
  return (
    <div className='post'>
      <button className='btn btn--wide post__back'>Go back</button>
      <h2 className='post__heading'>Details</h2>
      <div className='post__description'>
        <p>User id: 1</p>
        <p>Id: user123</p>
        <p>Title: blah blah blah</p>
      </div>
      <div className='post__text'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci
        voluptatum pariatur, ab enim praesentium ut repellat. Mollitia facere
        quis exercitationem adipisci, omnis quisquam quos eum sint, natus dolore
        ex quaerat. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Nisi, magni ipsum incidunt quisquam, ducimus adipisci voluptatem minus
        omnis aut, molestias ipsa aliquam? Distinctio quo, ducimus repellendus
        inventore reprehenderit rem neque?
      </div>
    </div>
  )
}
