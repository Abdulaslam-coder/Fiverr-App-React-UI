import React from 'react'
import { Link } from "react-router-dom";

import "./Messages.scss"
const Messages = () => {

  const currentUser = {
    id: 1,
    username:"Abdul Salam",
    isSeller:true,

  };
  const messages = `This is the testing message`;

  return (
    <div className="messages">
      <div className="container">
        <div className="title">
          <h1>Orders</h1>
          <Link to="/add">
             <button>Add New Gigs</button>
          </Link>
        </div>
        <table>
          <tr>
            <th>Buyer</th>
            <th>Last Message</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
          <tr className='active'>
            <td>
              Abdul Salam
             </td>
            <td><Link to="/message/123" className='link'>{messages.substring(0,100)}...</Link></td>
            <td>1 day ago</td>
            <td>
              <button>Mark as Read</button>
            </td>
           
          </tr>
        </table>
      </div>
    </div>
  )
}

export default Messages