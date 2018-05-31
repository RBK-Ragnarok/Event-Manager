import React from 'react'

function Message (props) {
  return (
    <div>
      <div className='row'>
        <div className='col-md-4'>
          <center>
            <div className='card' id='message' >
              <div className='card-content'>
                <div className='card-header-blue'>
                  <h1 className='card-heading'>From : {props.message.from}</h1>
                </div>
                <div className='card-body'>
                  <p className='card-p'>
                    <h2>{props.message.text}</h2>
                  </p>
                </div>

                <nav className='nav-tabs'>
                  <ul className='nav nav-pills pull-left'>
                    <li className='card-action'><a href='#'>{props.message.date}</a></li>
                  </ul>
                </nav>

              </div>
            </div>
          </center>
        </div>
      </div>
    </div>
  )
}

export default Message
