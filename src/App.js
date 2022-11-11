import AuthContext from "./components/Login&logout/Context";
import About from "./components/HEADER/About";
import { Routes, Route, Link ,Redirect } from "react-router-dom";
import Home from "./components/HEADER/Home";
import classes from "./App.module.css";
import "./App.css";
import ContactUs from "./components/HEADER/ContactUs";
import ProductPage from "./components/store/ProductsPage";
import ProductDetails from "./components/store/ProductDetails";
import SignUp from "./components/Login&logout/SignUp";
import { useState, useEffect, useContext } from "react";
import Cart from "./components/Cart/Cart";

const App = (props) => {

  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;

  const items = [
    {
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },
    {
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },
    {
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },
    {
      title: "Blue Color",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];
  const [show, setshow] = useState(false);

  const [cart, setcart] = useState([]);
  const addtocart = (data) => {
    setcart([...cart, { ...data, quantity: 1 }]);
  };

  const cartitems = cart.map((arr) => (
    <Cart title={arr.title} price={arr.price} imageUrl={arr.imageUrl} />
  ));

  const changestate = () => {
    setshow(false);
  };
  const changestate1 = () => {
    setshow(true);
  };

  const logouthandler = () => {
    authCtx.logout()
  };
   
  return (
    <div>
        {!isLoggedIn && 
          <div  className="navbar1">
            <div  onClick={changestate} className="navbar1">
              <Link to="/">home</Link>
              <Link to="/about">About us</Link>
              <Link to="/contact">Contact Us</Link>
            </div>

            <Link to='/store' onClick={changestate1}> store </Link>
            {show && <Link to="/cart">Cart</Link>}
            {/* <button onClick={logouthandler} className="navbar__cart-logout">LogOut</button> */}
            <Link to="/logout"  onClick={logouthandler} className="navbar__cart-logout" >Logout</Link>
              </div> 
              }
              {!isLoggedIn && <Link to='/login' className="navbar__cart-login">LogIn</Link>}
            {/* <div className="navbar__cart">
              {!isLoggedIn && <Link to='/login' className="navbar__cart-login">LogIn</Link>}
              <Link to="/logout" className="navbar__cart-logout">Logout</Link>
              {show && <Link to="/cart">Cart</Link>}
            </div> */}
       
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contact" element={<ContactUs />}></Route>
        {/* <Route path="/store" element={ isLoggedIn ? <ProductPage itemlist={items} addtocart={addtocart} />:<Redirect to="/login"/>}
        ></Route> */}
        <Route
          path="/store/:urlName"
          element={<ProductDetails data={items} addtocart={addtocart} />}
        ></Route>
        <Route path="/login" element={<SignUp />}></Route>
        <Route path="/logout" element={<SignUp />}></Route>
        <Route path="/cart" element={<Cart cart={cartitems}></Cart>} />
      </Routes>

      </div>
  )
};
export default App;
