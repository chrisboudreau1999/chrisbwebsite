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
                <img height={500} src='https://i.ibb.co/V3MZwr7/Chris-Adventure.jpg' alt='aboutChris'/>
              </div>
              <div className='right'>
                <h3> Whether I'm biking in the middle of the night or traversing through dense forests, I'm constantly pushing myself to new heights and discovering what I'm truly capable of. I always love capturing the most magical moments of my life and taking photos of this beautiful province </h3>
                
                <Button  href={"https://www.strava.com/athletes/60461458"} target="_blank" rel="noopener noreferrer">
                  Check out my Strava  <i className='fab fa-strava '/>     
                </Button>    {'  '}           
                <Button  href={"https://www.alltrails.com/members/mrpantz300?ref=header"} target="_blank" rel="noopener noreferrer">               
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