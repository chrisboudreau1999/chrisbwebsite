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
              src='https://i.ibb.co/Ky18ZXQ/KoH.png'
              text='Kings of Hali 5, Melee Stream Runner'
              label='LiveStream Running'
              popupText='During big events, you need multiple people to help with broadcasting. During Kings of Hali 5, the biggest fighting game tournament of Atlantic Canada, I was a volunteer stream runner with jobs including finding people to go on the stream, updating the stream data on the players on screen, and moderating the chat.'
              popupLink='https://www.twitch.tv/videos/1561318316?t=03h29m54s'
              popupButton='Checkout the Kings of Hali 5 stream'
              popupFA='fab fa-twitch'
            />
            <CardItem
              src='https://i.ibb.co/m85J6Rr/Chess-Brah.jpg'
              text='Chessbruh plays me and puts me on his youtube channel'
              label='Feature'
              popupText='I had the pleasure of playing a casual game of chess with Grandmaster Aman Hambleton, and he decided to feature that game on his YouTube channel, ChessBruh.'
              popupLink='https://www.youtube.com/watch?v=wsC6RrjAQus'
              popupButton="watch the video here"
              popupFA="fab fa-youtube"
            />
            
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='https://i.ibb.co/mXvRvyd/skeleton.jpg'
              text='Level22Skeleton Interview people downtown'
              label='Camera Work'
              popupText='I had the pleasure of being the cameraman for this interview. We got to experience a lot of the Halifax Downtown culture, captured the moment, and interviewed some very interesting people.'
              popupLink="https://www.youtube.com/watch?v=WYS1PlSZDbo"
              popupButton="watch the video here"
              popupFA="fab fa-youtube"
           />
            <CardItem
              src='https://i.ibb.co/M7YVZx7/tmrw.jpg'
              text='TomorrowLan 2022 Casting'
              label='Livestream Casting'
              popupText='Casting is very important for tournaments of all varieties, and commentary is a very hard task. Throughout the years, I got to cast multiple Super Smash Brothers Melee tournaments, gaining skills in being entertaining and knowledgeable for viewers to enjoy live streams.'
              popupLink='https://www.twitch.tv/videos/1756713172?t=02h42m37s'
              popupButton="Check out my latest casting!"
              popupFA='fab fa-twitch'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CardsCC;