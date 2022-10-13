import classes from  './App.module.css'
import Header from './components/HEADER/Header';
import Music from './components/shopping item/Music';
import BottumHeader from './components/HEADER/BottumHeader';
import Merch from './components/shopping item/Merch';
import Cart from './components/HEADER/Cart';
import { useState } from 'react';
import About from './components/HEADER/About';

const App = (props)=>{

  const [items,setitems]=useState([
    {
      title: 'Colors', 
      price: 100,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png', 
      },
      { 
      title: 'Black and white Colors',
      price: 50,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
      },
      {
      title: 'Yellow and Black Colors', 
      price: 70,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
      },
      {
      title: 'Blue Color',
      price: 100,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
      }
  ])

  const [cart,setcart]=useState([]);
  console.log(cart)
  const addtocart=(data)=>{
  console.log(cart)
    setcart([...cart ])
  }

  return(
    <div>
<Header></Header>

{cart.length>0 && < Cart  cart={cart} ></Cart> }
<Music itemlist={items} addtocart={addtocart}/>

<button>See the Cart </button>
<BottumHeader></BottumHeader>
    </div>
  )
}
export default App ;