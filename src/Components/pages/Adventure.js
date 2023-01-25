import React from 'react'
import '../../App.css'
import Cards from '../AdventureCards.js';
import AboutAdventure from '../AboutAdventure';
import Footer from '../Footer';
function Adventure(){
    return(
        <>
        <AboutAdventure/>
        <Cards/>
        <Footer />
        </>
    )
}
export default Adventure;