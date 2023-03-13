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
            src='BillyBluenose.jpg'
            text='Billy Bluenose Battle of the Atlantic'
            label='2nd Place Game Jam'
            popupText='Myself and a team of 5 others created this game for the atlantic  gamejam coded with Box2D which is a web based game engine with threejs to create the partical engine. our game ended up placing 2nd out of 12 teams!'
            popupLink='https://chadams.itch.io/billy-bluenose-battle-of-the-atlantic'
            popupButton='Play the Game'
            popupFA='fa-solid fa-gamepad'
          />
        </ul>
        <ul className='cards__items'>
          <CardItem
            src='BoneBot.png'
            text='Discord Bot with JDA'
            label='Discord Bot'
            popupText='I made myself a discord bot that gives out a random image of my friend out of a list of possible photos, this was created with the JDA (Java Discord Api) and Maven'
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