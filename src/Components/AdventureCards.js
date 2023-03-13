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
                  text='Kenomee Canyon'
                  label='Backpacking'
                  popupText='Kenomee Canyon Trail is a backpacking in Economy Nova Scotia with about 30+ kilometers round trip myself and two other friends did this trip in August 2022 Where we made a video showing our experience                  '
                  popupLink='https://youtu.be/VDukqaQZBc0'
                  popupButton="Watch the Vlog"
                  popupFA="fab fa-youtube"
                />
                <CardItem
                  src='Split.jpg'
                  text='Cape Split Sunset'
                  label='Sunset Hike'
                  popupText="Cape Split is a very heavily trafficked hiking spot in the Annapolis Valley in Nova Scotia, because it is out and back the majority of people don't get to see the beauty of the split during the sunset. Myself and some friends ended up with a perfect sunset back in October 2022 to capture some amazing photos "
                  popupLink='https://www.alltrails.com/explore/recording/cape-split-trail-08fc80d--2?u=m&sh=sqitha'
                  popupButton='My Cape Split hike'
                  popupFA='fas fa-hiking'
                />

              </ul>
              <ul className='cards__items'>
              <CardItem
                  src='Peggy.jpg'
                  text='Peggys Cove Sunrise'
                  label='Biking'
                  popupText='Peggys Cove is one of the most famous locations in Nova Scotia, where biking there is a total of 100 km round trip making it not the easiest of trips, in August 2021 myself and one of my friends did this route for sunrise starting at 2:30 in the morning to make it to Peggys Cove for 6 am!'   
                  popupLink='https://www.strava.com/activities/5769074821'
                  popupButton='Checkout the Strava Ride'
                  popupFA='fab fa-strava'
                  />
                <CardItem
                  src='Duncan.jpg'
                  text='Duncans Cove Sunrise'
                  label='Sunrise Hike' 
                  popupText="Every spring I love to celebrate the weather by visiting Duncans Cove for sunrise. It's a short hike but it shows off the beauty of Nova Scotia's coasts so perfectly I can't resist not doing this hike every year"                  
                  popupLink='https://www.alltrails.com/explore/recording/duncan-s-cove-9bc99c5?u=m&sh=sqitha'
                  popupButton="Duncan's Cove Sunrise"
                  popupFA='fas fa-hiking'
                />
                < CardItem
                  src='Chignecto.jpg'
                  text='Cape Chignecto'
                  label='Backpacking' 
                  popupText='Cape Chignecto is considered to be one of the most challenging backpacking routes in Nova Scotia, with 52 km and 2000+ Meters of elevation this trip is quite difficult, Myself and 3 of my friends managed to complete this challenge in less than 72 hours while capturing all of the struggles and highlights'   popupLink='https://www.youtube.com/playlist?list=PLkdlS2FLiv46autS0W_vxaS6CfCTFwVcr'
                  popupButton='Watch the Vlog'
                  popupFA="fab fa-youtube"
             />
              </ul>
            </div>
          </div>  
        </div>

  );
}

export default AdventureCards;