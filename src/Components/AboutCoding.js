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
          <div className='codingimg'>
            <img height={100} src='https://i.ibb.co/kBDRbFV/Java.png' alt='java' title='Java'/>
            <img height={100} src='https://i.ibb.co/vLt69pv/Html.png' alt='html' title='HTML'/>
            <img height={100} src='https://i.ibb.co/5Bjr2R3/Css.png' alt='css'title='CSS'/>
            <img height={100} width={100} src='https://i.ibb.co/Pr8HsxP/Csharp.png' alt='csharp' title='CSharp'/>
            <img height={100} src='https://i.ibb.co/vJxk0X3/Javascript.png' alt='javascript' title='Javascript'/>
            <img height={100} src='https://i.ibb.co/LN2LF7L/Node.png' alt='Node' title='Node'/>
            <img height={100} src='https://i.ibb.co/0fskBWS/React.png' alt='React' title='React'/>
            <img height={100} src='https://i.ibb.co/vDPVqDK/mongoDB.jpg' alt='mongodb' title='MongoDB'/>
            <img height={100} src='https://i.ibb.co/qntnQ4F/SQL.jpg' alt='mySQL' title='mySQL'/>
            <img height={100} src='https://i.ibb.co/0tkZ5tL/firebase.png' alt='firebase' title='Firebase'/>
          </div>
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