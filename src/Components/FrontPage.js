import React from 'react';
import '../App.css';
import { Button } from './Button';
import './FrontPage.css';
function FrontPage() {
  return (
    <div className='hero-container'>   
      <h1>Welcome!</h1>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Check out my Github   <i className='fab fa-github '/>
          
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          Check out my Youtube <i className='fab fa-youtube' />
        </Button>
      </div>
    </div>
  );
}

export default FrontPage;