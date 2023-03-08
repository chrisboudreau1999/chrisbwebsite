import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
function CardItem(props) {
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef(null);

  const handleClick = () => {
    setShowPopup(true);
  }

  const handleClose = () => {
    setShowPopup(false);
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setShowPopup(false);
      }
    }

    if (showPopup) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showPopup]);

  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' onClick={handleClick}>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='placeholder'
              src={props.src} 
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
      {showPopup &&
        <div className="popup">
          <div className="popup-content" ref={popupRef}> 
            <div className='leftpop'>         
              <img className='popup__img' alt='popup image' src={props.src} />
            </div>   
            <div className='rightpop'>
              <h2 className="popup__title">{props.popupTitle}</h2>
              <p className="popup__text">{props.popupText}</p>
              <Button href={props.popupLink} target="_blank" rel="noopener noreferrer">
              {props.popupButton + " "} <i className={props.popupFA} />
            </Button>
            </div> 
          </div>
      </div>
      }
    </>
  );
}

export default CardItem;