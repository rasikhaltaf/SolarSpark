import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../../images/logo.png";
import {FaUserAlt, FaSearch, FaCartPlus} from "react-icons/fa"


const options ={
       burgerColorHover:"#eb4034",
        logo,
        logoWidth:"20vmax",
        navColor1:"white",
        burgerColor: "white",
        // logoHoverColor:"#eb4034",
        logoHoverSize: "10px",
        link1Text:"Home",
        link2Text:"Products",
        link3Text:"Contact",
        link4Text:"About",
        link1Url:"/",
        link2Url:"/products",
        link3Url:"/contact",
        link4Url:"/about",
        link1Size:"1.3vmax",
        link1Padding:"3vmax",
        profileIcon:true,
        ProfileIconElement:FaUserAlt,
        searchIcon:true,
        SearchIconElement:FaSearch,
        cartIcon:true,
        CartIconElement:FaCartPlus,
        link1Color:"rgba(35,35,35,0.8)",
        nav1justifyContent:"flex-end",
        nav2justifyContent:"flex-end",
        nav3justifyContent:"flex-start",
        nav4justifyContent:"flex-start",
        link1ColorHover:"#000000",
        link1Margin:"1vmax",
        profileIconUrl: "/login",
        profileIconColor:"rgba(35,35,35,0.8)",
        searchIconColor:"rgba(35,35,35,0.8)",
        cartIconColor:"rgba(35,35,35,0.8)",
        profileIconColorHover: "#000000",
        searchIconColorHover: "#000000",
        cartIconColorHover: "#000000",
        cartIconMargin:"1vmax",
        
}
const Header = () => {
        
  return (
    <>
    <div className="nv">
      <ReactNavbar {...options }
        
    />
    </div>
      
    </>
  );
};

export default Header;
