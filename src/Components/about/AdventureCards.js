import React from 'react';

import CardItem from '../cards/CardItem';

function AdventureCards() {
  return (

        <div className='cards'>
          <h1>Adventure's I've been on</h1>
          <div className='cards__container'>
            <div className='cards__wrapper'>
              <ul className='cards__items'>
                <CardItem
                  src='https://i.ibb.co/tx7qR7T/Kenomee.png'
                  text='Kenomee Canyon'
                  label='Backpacking'
                  popupText='The Kenomee Canyon Trail is a backpacking trail in Economy, Nova Scotia, with about 30+ kilometers round trip. Myself and two other friends did this trip in August 2022, where we made a video showing our experience.'
                  popupLink='https://youtu.be/VDukqaQZBc0'
                  popupButton="Watch the Vlog"
                  popupFA="fab fa-youtube"
                />
                <CardItem
                  src='https://i.ibb.co/YWZKFvx/Split.jpg'
                  text='Cape Split Sunset'
                  label='Sunset Hike'
                  popupText="Cape Split is a heavily trafficked hiking spot in the Annapolis Valley of Nova Scotia. Because it is an out-and-back trail, the majority of people don't get to see the beauty of the split during sunset. However, myself and some friends ended up with a perfect sunset back in October 2022, allowing us to capture some amazing photos."
                  popupLink='https://www.alltrails.com/explore/recording/cape-split-trail-08fc80d--2?u=m&sh=sqitha'
                  popupButton='My Cape Split hike'
                  popupFA='fas fa-hiking'
                />

              </ul>
              <ul className='cards__items'>
              <CardItem
                  src='https://i.ibb.co/31YGQTF/peggy.jpg'
                  text='Peggys Cove Sunrise'
                  label='Biking'
                  popupText='Peggys Cove is one of the most famous locations in Nova Scotia, where biking there is a total of 100 km round trip making it not the easiest of trips, in August 2021 myself and one of my friends did this route for sunrise starting at 2:30 in the morning to make it to Peggys Cove for 6 am!'   
                  popupLink='https://www.strava.com/activities/5769074821'
                  popupButton='Checkout the Strava Ride'
                  popupFA='fab fa-strava'
                  />
                <CardItem
                  src='https://i.ibb.co/jfPX58Q/Duncan.jpg'
                  text='Duncans Cove Sunrise'
                  label='Sunrise Hike' 
                  popupText="Every spring, I love to celebrate the weather by visiting Duncan's Cove for sunrise. It's a short hike, but it shows off the beauty of Nova Scotia's coasts so perfectly that I can't resist doing this hike every year."                  
                  popupLink='https://www.alltrails.com/explore/recording/duncan-s-cove-9bc99c5?u=m&sh=sqitha'
                  popupButton="Duncan's Cove Sunrise"
                  popupFA='fas fa-hiking'
                />
                < CardItem
                  src='https://i.ibb.co/XkDq41m/Chignecto.jpg'
                  text='Cape Chignecto'
                  label='Backpacking' 
                  popupText='Cape Chignecto is considered to be one of the most challenging backpacking routes in Nova Scotia. With 52 km and 2000+ meters of elevation, this trip is quite difficult. However, myself and three of my friends managed to complete this challenge in less than 72 hours while capturing all of the struggles and highlights.'  
                   popupLink='https://www.youtube.com/playlist?list=PLkdlS2FLiv46autS0W_vxaS6CfCTFwVcr'
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