import React from 'react'
import "./Message.scss"
import { Link } from 'react-router-dom'
const Message = () => {
  return (
    <div className="message">
      <div className="container">
        <span className="breadcrumbs">
         <Link to="/messages"> MESSAGE </Link> > ABDUL SALAM
        </span>
        <div className="messages">
          <div className="item">
            <img src="https://images.pexels.com/photos/11830980/pexels-photo-11830980.jpeg" alt="" />
            <p>
              Hello My name is Abdul Salam and I am a react developer!
            </p>
          </div>
          <div className="item owner">
            <img src="https://images.pexels.com/photos/2350325/pexels-photo-2350325.jpeg" alt="" />
            <p>
             Oh Nice to meet you Abdul Salam!
            </p>
          </div>
        </div>
        <hr/>
        <div className="write">
          <textarea name="" placeholder="write a message" id="" cols="30" rows="10"></textarea>
          <button>Send</button>
        </div>
      </div>
    </div>
  )
}

export default Message