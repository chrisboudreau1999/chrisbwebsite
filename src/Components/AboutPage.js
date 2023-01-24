import React from 'react';
import './AboutPage.css';
import Button from 'react-bootstrap/Button';
function AboutPage(props) {
  return (
    <>
          <div className='about-page'>
            <div className='left'>
              <img src='chris2test.jpg' alt='aboutChris'/>
            </div>
            <div className='right'>
              <h1> Chris Boudreau</h1>
              <h3> Hi I am a 23 year old dal graduate from the Applied Computer Science program! </h3>
              <Button
                type="button"
                variant="primary"
                onClick={() => {  window.location.href="https://github.com/chrisboudreau1999"; }}
             >
               Check out my Github   <i className='fab fa-github '/>     
             </Button>              
              <Button
                type="button"
                variant="primary"
                href="/coding" 
             >
               Check out my Coding Experiance  <i className='fa fa-code '/>     
             </Button> 
            </div>
          </div>

    </>
  );
}

export default AboutPage;