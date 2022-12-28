import React from 'react'
import {Link} from 'react-router-dom'
import Logo from "../img/logo-quai-antique.png"

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <div className="links">
          <Link className='link' to="/?cat=menu">
            <h6>MENU</h6>
          </Link>
          <Link className='link' to="/?cat=book">
            <h6>RESERVER</h6>
          </Link>
          <Link className='link' to="/?cat=about">
            <h6>A PROPOS</h6>
          </Link>
          <Link className='link' to="/?cat=contact">
            <h6>CONTACT</h6>
          </Link>
          <span>Maxim</span>
          <span>Me déconnecter</span>
          <span className='write'>
            <Link className='link' to='/write'>Modifier</Link>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Navbar