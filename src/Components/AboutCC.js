import React from 'react';
import './AboutPage.css';
import Button from 'react-bootstrap/Button';
function AboutCC(props) {
  return (
    <>
          <div className='about-page'>
            <div className='left'>
              <img height={500} src='ChrisCamera.jpg' alt='aboutChris'/>
            </div>
            <div className='right'>
               <h3> I love to entertain, Behind or in front of the camera I am great at producing videos in any way I can help! If there is a camera involved I will always be ready to do or say something entertaining! check out all the projects I've created or helped produce down below! </h3>
               <Button
                    type="button"
                    variant="primary"
                    onClick={() => {  window.location.href="https://www.youtube.com/channel/UCQRuPtG4-PWrCZ9QKTk0qPw"; }}
                    >
                    Check out my Youtube <i className='fab fa-youtube' />
                </Button>
       

              </div>
            </div>

    </>
  );
}

export default AboutCC;