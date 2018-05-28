import React from 'react'

function Message (props) {
  return (
    <div>
      <h3>{"From : "+props.message.from}</h3>
      <h2>{props.message.text}</h2>
      <p>{props.message.date}</p>

    </div>
  )
}

export default Message
