import React from 'react';
import './AboutPage.css';
import Button from 'react-bootstrap/Button';
function AboutAdventure(props) {
  return (
    <>
          <div className='about-page'>
            <div className='left'>
              <img src='ChirsAdventuretest.jpg' alt='aboutChris'/>
            </div>
            <div className='right'>
               <h3> I am obssessed with extreme adventure! pushing myself to my limits is something I chase all the time. mainly biking and backpacking around nova scotia I have seen the beauties of the province and try to capure what there is in store. </h3>
                <Button
                  type="button"
                  variant="primary"
                  onClick={() => {  window.location.href="https://www.strava.com/athletes/60461458"; }}
              >
                Check out my Strava  <i className='fab fa-strava '/>     
              </Button>    {'  '}           
              <Button
                  type="button"
                  variant="primary"
                  onClick={() => {  window.location.href="https://www.alltrails.com/members/mrpantz300?ref=header"; }}
              >
                Check out my Alltrails <i class="fas fa-hiking"/>    
              </Button> 
              </div>
            </div>

    </>
  );
}

export default AboutAdventure;