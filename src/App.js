import React,{Fragment, useState} from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';

function App() {
  const[cartIsShown, setCartIsShown]=useState(false);

  const showcarthandler=()=>{
    setCartIsShown(true);
  }

  const hideCartHandler=()=>{
    setCartIsShown(false);
  }

  return (
    <Fragment>
      {cartIsShown && <Cart/>}
<Header onshowCart={showcarthandler}/>
<main>
<Meals/>
</main>
<Cart></Cart>
    </Fragment>
    
  );
}

export default App;
