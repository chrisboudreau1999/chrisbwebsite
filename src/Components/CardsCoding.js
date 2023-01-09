import React from 'react';
import './Cards.css';
import CardItem from './CardItem.js';

function CardsCoding() {
  return (
    <div className='cards'>
      <h1>Coding Projects</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='BillyBluenose.jpg'
              text='Billy Bluenose'
              label='Atlantic Gamejam 2022 2nd place'
            />
          </ul>
          <ul className='cards__items'>
          <CardItem
              src='BoatleRoyale.png'
              text='Boatle Royale'
              label='Unity game group project'
            />
            <CardItem
              src='BoneBot.png'
              text='BoneBot'
              label='Java Discord API'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CardsCoding;