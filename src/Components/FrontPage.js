import React from 'react';
import '../App.css';
import Button from 'react-bootstrap/Button';
import './FrontPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function FrontPage() {
  
  return (
    
    <div className='main-container'>   
      <h1>Welcome!</h1>
      <div className='main-btns'>
        <Button href={"https://github.com/chrisboudreau1999"} target="_blank" rel="noopener noreferrer"
        >
          Check out my Github   <i className='fab fa-github '/>     
        </Button>    
        <Button href={"https://www.youtube.com/channel/UCQRuPtG4-PWrCZ9QKTk0qPw"} target="_blank" rel="noopener noreferrer"
        >
          Check out my Youtube <i className='fab fa-youtube' />
        </Button>

    
      </div>
    </div>
  );
}

export default FrontPage;