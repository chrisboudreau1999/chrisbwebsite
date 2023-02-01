import React from 'react'
import '../../App.css'
import Cards from '../CardsCC.js';
import Footer from '../Footer';
import AboutCC from '../AboutCC';
function Home(){
    return(
        <>
        <AboutCC/>
        <Cards/>
        <Footer />
        </>
    )
}
export default Home;