import React from 'react'
import { Link } from "react-router-dom";

import "./Orders.scss"
const Orders = () => {

  const currentUser = {
    id: 1,
    username:"Abdul Salam",
    isSeller:true,

  };

  return (
    <div className="orders">
      <div className="container">
        <div className="title">
          <h1>Orders</h1>
          <Link to="/add">
             <button>Add New Gigs</button>
          </Link>
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>{currentUser?.isSeller? "Buyer":"Seller"}</th>
            <th>Contact</th>
          </tr>
          <tr>
            <td>
              <img className='img' src="https://images.pexels.com/photos/17964711/pexels-photo-17964711/free-photo-of-a-person-holding-a-smartphone-at-a-concert.jpeg" alt="" />
            </td>
            <td>Gig1</td>
            <td>88</td>
            <td>123</td>
            <td>
              <img  className="delete" src="/img/message.png" alt="" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default Orders