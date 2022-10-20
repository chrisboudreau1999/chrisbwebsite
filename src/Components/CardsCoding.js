import React from 'react';
import './Cards.css';
import CardItem from './CardItem.js';

function CardsCoding() {
  return (
    <div className='cards'>
      <h1>Some Coding Projects i've been a part of</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src=''
              text='Website prototype'
              label='React Frontend and Backend'
            />
            <CardItem
              src=''
              text='Billy Bluenose'
              label='Atlantic Gamejam 2022 2nd place'

            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src=''
              text='BoneBot'
              label='Java Discord API'
            />

          </ul>
        </div>
      </div>
    </div>
  );
}

export default CardsCC;