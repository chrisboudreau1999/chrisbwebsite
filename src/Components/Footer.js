import React from 'react'
import './Footer.css';
function Footer() {
  return (
    <div className='footer-container'>
        <div className='footer-links' color='white'>

                    <a href='https://www.linkedin.com/in/chris-boudreau-6641901b2/'><i className='fab fa-linkedin' /></a>
                    <a href='https://www.youtube.com/channel/UCQRuPtG4-PWrCZ9QKTk0qPw'><i className='fab fa-youtube' /></a>
                    <a href='https://github.com/chrisboudreau1999'><i className='fab fa-github' /></a>
                    <a href='https://www.instagram.com/chris_b_chiken/'color='white' text-decoration= 'none' ><i className='fab fa-instagram'  /></a>

        </div>
        <a href = "mailto: chris.boudreau1999@gmail.com">Email Me!</a>
    </div>
  )
}

export default Footer