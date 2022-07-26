import React from 'react';
import './Cards.css';
import CardItem from './CardItem.js';

function CardsCC() {
  return (
    <div className='cards'>
      <h1>Some Videos I've helped Produce</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='KoH.png'
              text='Kings of Hali 5, Melee Stream Runner'
              label='LiveStream Running'
            />
            <CardItem
              src='ChessBrah.jpg'
              text='Chessbruh plays me and puts me on his youtube channel'
              label='Feature'

            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='skeleton.jpg'
              text='Level22Skeleton Interview people downtown'
              label='Camera Work'
            />
            <CardItem
              src='tmrw.jpg'
              text='TomorrowLan 2022 Casting'
              label='Livestream Casting'

            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CardsCC;