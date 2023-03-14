import React, { useState, useRef } from 'react';
import './AboutPage.css';
import Button from 'react-bootstrap/Button';
import CardsCoding from './CardsCoding';

function AboutCoding(props) {
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
            <img height={100} src='Java.png' alt='java' title='Java'/>
            <img height={100} src='html.png' alt='html' title='HTML'/>
            <img height={100} src='css.png' alt='css'title='CSS'/>
            <img height={100} width={100} src='Csharp.png' alt='csharp' title='CSharp'/>
            <img height={100} src='Javascript.png' alt='javascript' title='Javascript'/>
            <img height={100} src='Node.png' alt='Node' title='Node'/>
            <img height={100} src='React.png' alt='React' title='React'/>
            <img height={100} src='mongoDB.jpg' alt='mongodb' title='MongoDB'/>
            <img height={100} src='SQL.png' alt='mySQL' title='mySQL'/>
            <img height={100} src='firebase.png' alt='firebase' title='Firebase'/>
        </div>
        <div className='right'>
          <h3> I am a recent graduate from the Applied Computer Science program at Dalhousie University, throughout my years I've learned many languages and frameworks mainly purtaining to web development. I learned a lot from multiple group projects doing backend and frontend work I feel I am great to work with any Team! </h3>
          <Button href={"https://github.com/chrisboudreau1999"} target="_blank" rel="noopener noreferrer"
             >
               Check out my Github   <i className='fab fa-github '/>     
             </Button> 
       
        </div>
      </div>   
      <div  className="bottom" ref={nextComponentRef}>
          <Button className="scroll-button" onClick={handleClick} ><i class="fa-solid fa-arrow-down" ></i></Button></div>
      <div ref={cardsRef}>
        <CardsCoding />
      </div>
    </>
  );
}

export default AboutCoding;