import React from 'react';
import './AboutPage.css';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
function AboutPage(props) {
  return (
    <>
          <div className='about-page'>
            <div className='left'>
              <img src='https://i.ibb.co/DD3Mwjh/Chris2.jpg' alt='aboutChris'/>
            </div>
            <div className='right'>
              <h1> Chris Boudreau</h1>
              <h3> Hi I am a 23 year old dal graduate from the Applied Computer Science program! this website is to so show off all my passions including things like Chess, Biking, Photography, and especially Programming! I am very passionate about Web Development and coding in general, check out my coding experiance with these links! </h3>
              <div className='.btn'>
              <Button href={"https://github.com/chrisboudreau1999"} target="_blank" rel="noopener noreferrer"
             >
               Check out my Github   <i className='fab fa-github '/>     
             </Button>    {'  '}           
             <Button as={Link} to="/coding" variant="primary">
               Check out my Coding Experiance  <i className='fa fa-code '/>     
             </Button> 
               </div>
            </div>
          </div>
          <div  className="bottom"></div>
    </>
  );
}

export default AboutPage;