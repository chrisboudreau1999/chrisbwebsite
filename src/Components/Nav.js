import React, { useState } from "react"
import {Link} from 'react-router-dom'
import'./Nav.css';


function Nav() {
  const[click, setClick] = useState(false);
  const[button,setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenue = () => setClick(false);

const showButton=() => {
  if(window.innerWidth<=960){
    setButton(false);
  }
  else{
    setButton(true);
  }
};
window.addEventListener('resize',showButton);
  return (
    <>
   

      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='' className="navbar-logo" onClick={closeMobileMenue}>
            Chris Boudreau
          </Link>  
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className= {click ? 'nav-menu active': 'nav-menu'}>
              <li className='nav-item'>
                <Link to='ContentCreation' className='nav-links' onClick={closeMobileMenue}>
                    Content Creation
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='Adventures' className='nav-links' onClick={closeMobileMenue}>
                    Adventures 
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='Coding' className='nav-links' onClick={closeMobileMenue}>
                    Coding 
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/AboutMe' className='nav-links' onClick={closeMobileMenue}>
                    About Me
                </Link>
              </li>
            </ul>
      
        </div>
      </nav>
    </>
  )
}

export default Nav