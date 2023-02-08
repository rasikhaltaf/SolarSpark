import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import Facebook from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import Logo from "../../../images/logo.png";
import Header from "../Header/Header";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://instagram.com/";
  };
  return (
    <>
      <Header />
      <div className="aboutSection">
        <div></div>
        <div className="aboutSectionGradient"></div>
        <div className="aboutSectionContainer">
          <Typography component="h1">About Us</Typography>

          <div>
            <div>
              <Avatar
                style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
                src={Logo}
                alt="Founder"
                className="avatar"
              />
              <Typography>Solar Spark</Typography>
              <Button onClick={visitInstagram} color="primary">
                Visit Instagram
              </Button>
              <span>
                This is a ecommerce wesbite made by{" "}
                <span className="names">
                  RASIKH ALTAF , SANILA SALEEM, MUQADDAS ABBASI AND ARMISH RANI.
                </span>
              </span>
            </div>
            <div className="aboutSectionContainer2">
              <Typography component="h2">Our Brands</Typography>
              <a href="https://www.facebook.com/" target="blank">
                <Facebook className="youtubeSvgIcon" />
              </a>

              <a href="https://instagram.com/" target="blank">
                <InstagramIcon className="instagramSvgIcon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
