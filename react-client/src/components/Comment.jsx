import React from 'react'

function Comment (props) {
  return (
    <div>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-12'>
            <div className='panel panel-default'>
              <div className='panel-body'>
                <div className='row'>
                  <div className='col-md-4'>
                    <img src='http://qualiscare.com/wp-content/uploads/2017/08/default-user.png' className='img-responsive' />
                  </div>
                  <div className='col-md-8'>
                    <p id='comment'><h2>My Name:{props.comment.sender}</h2></p>
                    <p id='comment'><h2>Comment:{props.comment.text}</h2></p>
                    <i className='fa fa-plus' aria-hidden='true' id='comment'>Date:{props.comment.date}</i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Comment
