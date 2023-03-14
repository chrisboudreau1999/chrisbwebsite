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
          <h3> I love entertaining people and making videos. Whether I'm in front of or behind the camera, I'm great at producing videos and always ready to do something entertaining. I'm really good at making videos that people like to watch and that show off my own unique style. I enjoy working with others and using my skills to help bring their ideas to life. Making videos is something I'm really passionate about and I put a lot of energy and enthusiasm into it. </h3>
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