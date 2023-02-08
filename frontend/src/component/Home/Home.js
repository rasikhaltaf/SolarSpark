import React, { useEffect } from "react";
import { CgMouse } from "react-icons/cg";
import "./Home.css";
import ProductCard from "./ProductCard.js";
import MetaData from "../layout/MetaData";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";
import { Link } from "react-router-dom";
import Search from "@material-ui/icons/Search";
import Cart from "@material-ui/icons/AddShoppingCart";
import Account from "@material-ui/icons/AccountBox";
import logo from "../../images/logo.png";
import Contact from "../layout/Contact";
import images from "../../images/mainImg.png";
import Navbar from "./Navbar";
import Gallary from "./Gallary";
import TopCategories from "./TopCategories";

const Home = () => {
  const img = logo;

  // const images =
  //   "https://previews.123rf.com/images/vectorlab/vectorlab1706/vectorlab170600045/79611062-isometric-ecology-concept-renewable-solar-energy-vector-flat-3d-illustration.jpg";

  
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MetaData title="Solar Spark" />
          

          <div className="banner">
          <Navbar />
            {/* <div className="headerSection">
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
            </div>  */}

            {/* <div className="homeSec">
              <div className="titles">
                <p>
                  Welcome To <span className="welcome">SolarSpark</span>{" "}
                </p>
                <h1>
                  FIND AMAZING <span className="welcome">PRODUCTS BELOW</span>
                </h1>

                <a href="#container">
                  <button>
                    Products <CgMouse />
                  </button>
                </a>
              </div>
              <img src={images} />
            </div> */}
          </div>

          <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title animated fadeInDown">Shop the latest products at great prices</h1>
          <p className="hero-description animated fadeInUp">Find everything you need for your home,  and more...</p>
          <a href="#container" className="hero-btn animated fadeIn">Shop Now</a>
        </div>
        <div className="hero-image">
          <img src={images} alt="Hero Image" />
        </div>
        
      </section>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#27303653" fill-opacity="0.4" d="M0,96L34.3,85.3C68.6,75,137,53,206,74.7C274.3,96,343,160,411,165.3C480,171,549,117,617,90.7C685.7,64,754,64,823,80C891.4,96,960,128,1029,138.7C1097.1,149,1166,139,1234,154.7C1302.9,171,1371,213,1406,234.7L1440,256L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path></svg>
      
             <h2 className="homeHeading">Featured Products</h2>

          <div className="container" id="container">
            {products &&
              products.map((product) => 
              <ProductCard key={product._id}  product={product} />)}
          </div>

          <Contact />
          <Gallary />
          <TopCategories />
          
        </>
      )}
    </>
  );
};

export default Home;
