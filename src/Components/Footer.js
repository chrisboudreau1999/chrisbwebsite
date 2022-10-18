import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css';

function Footer() {
  return (
    <div className='footer-container'>
        <div className='footer-links'>
            <div className='footer-link-wrapper'>
                <div className='footer-link-itmes'>
                    <a href='https://twitter.com/kingpiehi'>Twitter</a>
                    <a href='https://www.youtube.com/channel/UCQRuPtG4-PWrCZ9QKTk0qPw'>Youtube</a>
                    <a href='https://github.com/chrisboudreau1999'>Github</a>
                    <a href='https://www.instagram.com/chris_b_chiken/'>Phootography Instagram</a>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Footer