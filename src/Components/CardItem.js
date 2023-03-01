import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  const [showPopup, setShowPopup] = useState(false);

  const handleClick = () => {
    setShowPopup(true);
  }

  const handleClose = () => {
    setShowPopup(false);
  }

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
          <div className="popup-content">
            <img
              className='popup__img'
              alt='popup image'
              src={props.popupImage} 
            />
            <h2>{props.popupTitle}</h2>
            <p>{props.popupText}</p>
            <a href={props.popupLink} target="_blank" rel="noopener noreferrer">Go to website</a>
            <button onClick={handleClose}>Close</button>
          </div>
        </div>
      }
    </>
  );
}

export default CardItem;