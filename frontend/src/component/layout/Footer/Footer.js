import React from 'react'
import playstore from "../../../images/playstore.png";
import appstore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id='footer'>
    <div className='leftFooter'>
    <h4>Download Our App</h4>
    <p>Download App from Android and IOS mobile Phone</p>
    <img src={playstore} alt="playstore" />
    <img src={appstore} alt="Appstore" />
        
    </div>

    <div className='midFooter'>
        <h1>SolarSpark</h1>
        <p>High Quality is our first priority</p>
        <p>Copyrights 2022 &copy; SolarSpark</p>
    </div>

    <div className='rightFooter'>
    <h4>Follow Us</h4>
    <a href='https://www.instagram.com/'>Instagram </a>
    <a href='https://www.youtube.com/'>Youtube </a>
    <a href='https://web.facebook.com/'>Facebook </a>

    </div>
      
    </footer>
  )
}

export default Footer
