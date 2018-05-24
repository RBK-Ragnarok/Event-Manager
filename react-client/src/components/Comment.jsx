import React from 'react'

function Comment(props){

  return (
    <div>
      <h3>{props.comment.sender}</h3>
      <h2>{props.comment.text}</h2>
      <p>{props.comment.date}</p>

    </div>
  )
}

export default Comment
