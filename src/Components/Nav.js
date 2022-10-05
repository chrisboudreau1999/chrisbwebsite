import React, { useState } from "react"
import {Link} from 'react-router-dom'

function Nav() {
  const[click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenue = () => setClick(false);
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to="\" className="navbar-logo">
            insert logo
          </Link>  
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className= {click ? 'nav-menu active': 'nav-menu'}/>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenue}>
                  Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenue}>
                  Photography
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenue}>
                  Content Creation
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenue}>
                  Coding 
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenue}>
                  About Me
              </Link>
            </li>
        </div>
      </nav>
    </>
  )
}

export default Nav