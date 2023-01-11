import React from 'react';
import '../App.css';
import { Button } from './Button';
import './FrontPage.css';
function FrontPage() {
  return (
    <div className='hero-container'>   
      <h1>Welcome!</h1>
      <div className='hero-btns'>
        <button

          onClick={() => { console.log("test") }}>

          Check out my Github   <i className='fab fa-github '/>     
        </button>    
        <button
        onClick={() => { console.log("test2") }}>
          Check out my Youtube <i className='fab fa-youtube' />
        </button>
          
        
    
      </div>
    </div>
  );
}

export default FrontPage;