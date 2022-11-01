
import About from './components/HEADER/About';
import { Routes,Route ,Link} from 'react-router-dom';
import Home from './components/HEADER/Home';
import classes from './App.module.css'
import ContactUs from './components/HEADER/ContactUs';
import ProductPage from './components/store/ProductsPage';
import ProductDetails from './components/store/ProductDetails';

const App = (props)=>{

  const items=[
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
  ]

  return(
    <div>
      <div className={classes.black}>
      <Link to='/'>home</Link>
      <Link to='/about'>About us</Link>
      <Link to='/store'> store</Link>
      <Link to='/contact'>Contact Us</Link>
      </div>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/contact' element={<ContactUs/>}></Route>
         <Route path='/store' element={<ProductPage itemlist={items}/>}></Route>
         <Route path='/store/:urlName' element={<ProductDetails data={items}/>}>
         </Route>
      </Routes>
    </div>
  )
}
export default App ;