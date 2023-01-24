import React from 'react';
import './AboutPage.css';

function AboutPage(props) {
  return (
    <>
          <div className='about-page'>
            <div className='left'>
              <img src='chris2test.jpg' alt='aboutChris'/>
            </div>
            <div className='right'>
              <h1> Chris Boudreau</h1>
              <h3> Hi I am a 23 year old dal graduate from the Applied Computer Science program.</h3>
            </div>
          </div>

    </>
  );
}

export default AboutPage;