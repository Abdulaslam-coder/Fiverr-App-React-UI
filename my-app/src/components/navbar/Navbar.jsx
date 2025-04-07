import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import "./Navbar.scss"
const Navbar = () => {

const [active,setActive] = useState(false);
const [open,setOpen] = useState(false);

const {pathname} = useLocation();

const isActive =()=>{
  window.scrollY > 0 ?setActive(true) : setActive(false)
}
 useEffect(()=>{
  window.addEventListener("scroll",isActive);

  return ()=>{
    window.removeEventListener("scroll",isActive);
  }

},[]);

const currentUser = {
  id:1,
  username:"Abdul Salam",
  isSeller:true
}
  return (
    <div className={active || pathname !== "/"? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <Link to ="/" className='link'>
          <span className='text'>Fiverr</span>
          </Link>
          <span className='dot'>.</span>
        </div>
        <div className="links">
          <span>Fiverr Business</span>
          <span>Explore</span>
          <span>English</span>
          <span>Sign in</span>
          {!currentUser?.isSeller && <span>Become a Seller</span>}
          {!currentUser.isSeller && <button>Join</button>}
          {
            currentUser && (
              <div className="user" onClick={()=>setOpen(!open)}>
                <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg" alt="" />
                <span>{currentUser?.username}</span>
                {open &&
                <div className="option">
                  {currentUser?.isSeller &&(
                    <>
                    <Link to="/mygigs" className='link'>Gigs</Link>
                    <Link to="/add" className='link'>Add New Gigs</Link>
                    </>
                  )}
                  <Link to="/orders" className='link'>Orders</Link>
                  <Link to="/messages"className='link' >Messages</Link>
                  <Link to="/" className='link'>Logout</Link>
                </div>
                } 
              </div>
            )
          }
        </div>
      </div>
      {active || pathname!=="/" && (
      <>
      <hr/>
      <div className="menu">
          <Link className='link' to="/">Web Development</Link>
          <Link className='link' to="/">Digital Marketing</Link>
          <Link className='link' to="/">Programming & Tech</Link>
          <Link className='link' to="/">Business</Link>
          <Link className='link' to="/">Life Style</Link>
          <Link className='link' to="/">Video & Animation</Link>
          <Link className='link' to="/">Writing & Translation</Link>
          <Link className='link' to="/">AI Services</Link>
          <Link className='link' to="/">Music & Audio</Link>
      </div>
      </>
      )}
    </div>
  )
}

export default Navbar