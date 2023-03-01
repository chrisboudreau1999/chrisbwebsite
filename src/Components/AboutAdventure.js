import React, { useState, useRef } from 'react';
import './AboutPage.css';
import Button from 'react-bootstrap/Button';
import Card from './AdventureCards';
function AboutAdventure(props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextComponentRef = useRef(null);
  const cardsRef = useRef(null);

  const handleClick = () => {
    setCurrentIndex(currentIndex + 1);
    cardsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  return (
    <>
            <div className='about-page'>
              <div className='left'>
                <img height={500} src='ChrisAdventure.jpg' alt='aboutChris'/>
              </div>
              <div className='right'>
                <h3> I am obssessed with extreme adventure! pushing myself to my limits is where you can find me on my free time. mainly biking and backpacking around nova scotia i am normally going places not many others attempt! </h3>
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
                    <div  className="bottom" ref={nextComponentRef}>
                    <Button className="scroll-button" onClick={handleClick} ><i class="fa-solid fa-arrow-down" ></i></Button></div>
                <div ref={cardsRef}>
                  <Card />
                </div>
     </>
  );
}

export default AboutAdventure;