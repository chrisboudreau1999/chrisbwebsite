import React from 'react';
import './Cards.css';
import CardItem from './CardItem.js';

function AdventureCards() {
  return (
    <div className='cards'>
      <h1>Adventure's I've been on</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='Kenomee.png'
              lebel='Backpacking'
              text='Kenomee Canyon'

            />
            <CardItem
              src='Split.jpg'
              text='Cape Split Sunset'
              label='Sunset Hike'

            />

          </ul>
          <ul className='cards__items'>
          <CardItem
              src='Peggy.jpg'
              text='Peggys Cove Sunrise'
              label='Biking'

            />
            <CardItem
              src='Duncan.jpg'
              text='Duncans Cove Sunrise'
              label='Sunrise Hike' 

            />            
            < CardItem
              src='Chignecto.jpg'
              text='Cape Chignecto'
             label='Backpacking' 

          />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AdventureCards;