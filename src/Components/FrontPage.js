import React from 'react';
import '../App.css';
import Button from 'react-bootstrap/Button';
import './FrontPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function FrontPage() {
  
  return (
    
    <div className='hero-container'>   
      <h1>Welcome!</h1>
      <div className='hero-btns'>
        <Button
            type="button"
            variant="primary"
            onClick={() => {  window.location.href="https://github.com/chrisboudreau1999"; }}
        >
          Check out my Github   <i className='fab fa-github '/>     
        </Button>    
        <Button
          type="button"
          variant="primary"
          onClick={() => {  window.location.href="https://www.youtube.com/channel/UCQRuPtG4-PWrCZ9QKTk0qPw"; }}
        >
          Check out my Youtube <i className='fab fa-youtube' />
        </Button>

    
      </div>
    </div>
  );
}

export default FrontPage;