import React, { useState, useRef } from 'react';
import './AboutPage.css';
import Button from 'react-bootstrap/Button';
import CardsCC from './CardsCC';

function AboutCC(props) {
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
          <img height={500} src='ChrisCamera.jpg' alt='aboutChris'/>
        </div>
        <div className='right'>
          <h3> I love to entertain, Behind or in front of the camera I am great at producing videos in any way I can help! If there is a camera involved I will always be ready to do or say something entertaining! check out all the projects I've created or helped produce down below! </h3>
          <Button href={"https://www.youtube.com/channel/UCQRuPtG4-PWrCZ9QKTk0qPw"} target="_blank" rel="noopener noreferrer">
            Check out my Youtube <i className='fab fa-youtube' />
          </Button>
       
        </div>
      </div>   
      <div  className="bottom" ref={nextComponentRef}>
          <Button className="scroll-button" onClick={handleClick} ><i class="fa-solid fa-arrow-down" ></i></Button></div>
      <div ref={cardsRef}>
        <CardsCC />
      </div>
    </>
  );
}

export default AboutCC;