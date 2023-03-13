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
              popupText='during big events you need mulitple people to help with broadcasting. during Kinngs of Hali 5 the biggest fighting game tourniment of atlantic canada I was a volenteer stream runner with jobs including,finding people to go on stream, updating the stream data on the players on screen, annd moderation of the chat'
              popupLink='https://www.twitch.tv/videos/1561318316?t=03h29m54s'
              popupButton='Checkout the Kings of Hali 5 stream'
              popupFA='fab fa-twitch'
            />
            <CardItem
              src='ChessBrah.jpg'
              text='Chessbruh plays me and puts me on his youtube channel'
              label='Feature'
              popupText='I had the pleasure of playing a casual game of chess with Grandmaster Aman Hambleton and he decided to feature that game on his youtube channel ChessBruh'
              popupLink='https://www.youtube.com/watch?v=wsC6RrjAQus'
              popupButton="watch the video here"
              popupFA="fab fa-youtube"
            />
            
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='skeleton.jpg'
              text='Level22Skeleton Interview people downtown'
              label='Camera Work'
              popupText='I had the pleasure to be the cameraman for this interview. we got to experience a lot of the the Halifax Downtown culture and captured the moment and got to interview some very interesting people'
              popupLink="https://www.youtube.com/watch?v=WYS1PlSZDbo"
              popupButton="watch the video here"
              popupFA="fab fa-youtube"
           />
            <CardItem
              src='tmrw.jpg'
              text='TomorrowLan 2022 Casting'
              label='Livestream Casting'
              popupText='Casting is very important for tourniments of all varities and commentary is a very hard task. throughout the years got to cast multiple super smash brothers melee tourniments gainning skills in beingn entertainning and knowledgeble for viewers to enjoy live streams'
              popupLink='https://www.twitch.tv/videos/1756713172?t=02h42m37s'
              popupButton="Check out my latest casting"
              popupFA='fab fa-twitch'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CardsCC;