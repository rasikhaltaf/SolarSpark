import React from "react";
import "./Contact.css";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import LocalPhoneIcon from "@material-ui/icons/LocalPhone";
import SendIcon from "@material-ui/icons/Send";
import PublicIcon from "@material-ui/icons/Public";


const Contact = () =>{
    return(
    <>
    <form>
    <div className="mainContainer">
    <div className="contactForm">
        <h1>Contact Us</h1>
        <input type="text" placeholder="Enter Your First Name" />
        <input type="text" placeholder="Enter Your Last Name" />
        <input type="email" placeholder="Enter Your Email" />
        <textarea cols="30" rows="10" placeholder="Message"></textarea>
        <a href="mailto:discretestructure786@gmail.com">
        <button type="button" className="btn">Submit</button>
        </a>
    </div>
    <div className="locationContact">
        <h1>Contact Us</h1>
        <div className="location">
        <LocationOnIcon className="iconlocat" />
        <p><span>Address:</span> F7 Markez <br /> Islamabad Pakistan</p>
        </div>
        <div className="phone">
            <LocalPhoneIcon className="phoneIcon" />
            <p><span>Phone:</span> +92 3456789101 </p>
        </div>

        <div className="email">
            <SendIcon className="sendIcon" />
            <p><span>Email: </span>discretestructure786@gmail.com</p>
        </div>
        <div className="website">
        <PublicIcon className="publicIcon" />
        <p><span>Website:</span> solarspark.com</p>
        </div>
    </div>
    </div>
    
    </form>
    </>
    )
}

export default Contact;