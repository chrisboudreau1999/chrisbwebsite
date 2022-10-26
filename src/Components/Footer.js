import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css';

function Footer() {
  return (
    <div className='footer-container'>
        <div className='footer-links'>
            <div className='footer-link-wrapper'>
                <div className='footer-link-itmes'>
                    <a href='https://www.linkedin.com/in/chris-boudreau-6641901b2/'> <i className='fab fa-linkedin' /></a>
                    <a href='https://www.youtube.com/channel/UCQRuPtG4-PWrCZ9QKTk0qPw'>    <i className='fab fa-youtube' />   </a>
                    <a href='https://github.com/chrisboudreau1999'>  <i className='fab fa-github' /> </a>
                    <a href='https://www.instagram.com/chris_b_chiken/'><i className='fab fa-instagram' />  </a>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Footer