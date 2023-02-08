import "./App.css";
import Header from "./component/layout/Header/Header";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import WebFont from "webfontloader";
import React, { useState, useEffect } from "react";
import Footer from "./component/layout/Footer/Footer";
import Home from "./component/Home/Home";
// import Loader from "./component/layout/Loader/Loader";
import ProductDetails from "./component/Product/ProductDetails";
import Products from "./component/Product/Products";
import Search from "./component/Product/Search.js";
import LoginSignUp from "./component/User/LoginSignUp";
import store from "./store";
import { loadUser } from "./actions/userAction";
import UserOptions from "./component/layout/Header/UserOptions";
import { useSelector } from "react-redux";
import Profile from "./component/User/Profile";
import ProtectedRoute from "./component/Routess/ProtectedRoute";
import UpdateProfile from "./component/User/UpdateProfile"
import UpdatePassword from "./component/User/UpdatePassword";
import ForgotPassword from "./component/User/ForgotPassword"
import ResetPassword from "./component/User/ResetPassword";
import Cart from "./component/Cart/Cart";
import Shipping from "./component/Cart/Shipping";  
import Contact from "./component/layout/Contact.js"
import Navbar from "./component/Home/Navbar";
import ConfirmOrder from "./component/Cart/ConfirmOrder"
import { async } from "q";
import axios from "axios";
import Payment from "./component/Cart/Payment";
import { AuBankAccountElement, Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import OrderSuccess from "./component/Cart/OrderSuccess.js";
// import { FaKhanda } from "react-icons/fa";
import MyOrders from "./component/Order/MyOrders"
import OrderDetails from "./component/Order/OrderDetails"
import Dashboard from "./component/admin/Dashboard";
import ProductList from "./component/admin/ProductList";
import NewProduct from "./component/admin/NewProduct";
import UpdateProduct from "./component/admin/UpdateProduct";
import OrderList from "./component/admin/OrderList.js"
import ProcessOrder from "./component/admin/ProcessOrder";
import UsersList from "./component/admin/UsersList";
import UpdateUser from "./component/admin/UpdateUser";
import ProductReviews from "./component/admin/ProductReviews";
import About from "./component/layout/About/About";
import NotFound from "./component/layout/Not Found/NotFound";
import { Switch } from "@material-ui/core";

function App( ) { 
  const { isAuthenticated, user } = useSelector((state) => state.user);

  const [stripeApiKey, setStripeApiKey] = useState("");  

  async function getStripeApiKey() {
    const { data } = await axios.get("/api/v1/stripeapikey");

    setStripeApiKey(data.stripeApiKey);
  }




  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });

    store.dispatch(loadUser());
    getStripeApiKey();

  }, []);

  

  return (
    <Router>
    
      <Header />
      {/* <Link className="home" to="/"> <Home /> </Link>
      <Link className="home" to="/sad"> <Loader /> </Link> */}

      {isAuthenticated && <UserOptions user={user} />}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/product/:id" element={<ProductDetails />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/products/:keyword" element={<Products />} />
        <Route path="/search" element={<Search />} />

        <Route exact path="/account" element={<Profile />} />
        <Route exact path="/login" element={<LoginSignUp />} />

        <Route exact path="/me/update" element={<UpdateProfile />} />
        <Route exact path="/password/update" element={<UpdatePassword />} />
        <Route exact path="/password/forgot" element={<ForgotPassword />} />
        <Route exact path="/password/reset/:token" element={<ResetPassword />} />
        <Route exact path="/cart" element={<Cart />} />

        <Route exact path="/login/shipping" element={<Shipping />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/about" element={<About />} />

    </Routes>

      <Elements stripe={loadStripe(stripeApiKey)}> 
      <Routes>
        <Route path="/process/payment" element={<Payment />} />
        </Routes>
      </Elements>

      <Routes>

      <Route exact path="/success" element={<OrderSuccess />} />
        <Route exact path="/orders" element={<MyOrders />} />
        <Route exact path="/order/confirm" element={<ConfirmOrder />} />
        <Route exact path="/order/:id" element={<OrderDetails />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/products" element={<ProductList />} />
        <Route path="/admin/product" element={<NewProduct />} />
        <Route path="/admin/product/:id" element={<UpdateProduct />} />
        <Route path="/admin/orders" element={<OrderList />} />
        <Route path="/admin/order/:id" element={<ProcessOrder />} />
        <Route path="/admin/users" element={<UsersList />} />
        <Route path="/admin/user/:id" element={<UpdateUser />} />
        <Route path="/admin/reviews" element={<ProductReviews />} />

        {/* <Route path="*" element={<NotFound />} /> */}
        
</Routes>
 
      <Footer />
    </Router>
  );
}

export default App;
