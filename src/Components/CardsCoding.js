import React from 'react';
import './Cards.css';
import CardItem from './CardItem.js';

function CardsCoding() {
  return (
    <div className='cards'>
    <h1>Some Personal Projects</h1>
    <div className='cards__container'>
      <div className='cards__wrapper'>
        <ul className='cards__items'>
          <CardItem
            src='https://i.ibb.co/2hmhPyM/Billy-Bluenose.jpg'
            text='Billy Bluenose Battle of the Atlantic'
            label='2nd Place Game Jam'
            popupText='Myself and a team of five others created a game for the Atlantic GameJam. We coded it with Box2D, a web-based game engine, and used Three.js to create the particle engine. Our game ended up placing 2nd out of 12 teams!'
            popupLink='https://chadams.itch.io/billy-bluenose-battle-of-the-atlantic'
            popupButton='Play the Game'
            popupFA='fa-solid fa-gamepad'
          />
        </ul>
        <ul className='cards__items'>
          <CardItem
            src='https://i.ibb.co/zZJL7QT/website.jpg'
            text='My Personal Website'
            label='this website'
            popupText='I created this website myself using React to show off my web development skills and passions.'
            popupLink="https://github.com/chrisboudreau1999/chrisbwebsite"
            popupButton="Check out the Source Code"
            popupFA="fab fa-github"
         />
           <CardItem
            src='https://i.ibb.co/ZSzDKFM/BoneBot.png'
            text='Discord Bot with JDA'
            label='Discord Bot'
            popupText='I created a Discord bot myself using the JDA (Java Discord API) and Maven. The bot gives out a random image of my friend out of a list of possible photos.'
            popupLink="https://github.com/chrisboudreau1999/bonebot"
            popupButton="Check out the Source Code"
            popupFA="fab fa-github"
         />
        </ul>
      </div>
    </div>
  </div>
  );
}

export default CardsCoding;