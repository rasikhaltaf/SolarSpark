import React from 'react'
import { Link } from 'react-router-dom';
import Search from "@material-ui/icons/Search";
import Cart from "@material-ui/icons/AddShoppingCart";
import Account from "@material-ui/icons/AccountBox";
import logo from "../../images/logo.png";

const Navbar = () => {

    const img = logo;
  return (
    <>
    <div className="headerSection">
              <Link to="/">
                <img src={img} className="logo" />
              </Link>
              <div className="navbar">
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/about">About</Link>
                <Link to="/search">
                  <Search />
                </Link>
                <Link to="/cart">
                  <Cart />
                </Link>
                <Link to="/login">
                  <Account />
                </Link>
              </div>
            </div>
      
    </>
  )
}

export default Navbar
