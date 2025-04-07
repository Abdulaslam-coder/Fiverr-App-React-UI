import React from 'react'
import "./GigCard.scss"
const GigCard = ({item}) => {
  return (
    <div className='gigCard'>
        <img src={item.img} alt="" />
        <div className="info">
            <div className="user">
                <img src={item.pp} alt="" />
                <span>{item.username}</span>
            </div>
            <p>{item.desc}</p>
            <div className="star">
                <img src="./img/star.png" alt="" />
                <span>{item.star}</span>
            </div>
        </div>
        <div className="details">

        </div>
    </div>
  )
}

export default GigCard