import Cart from './Cart';
import classes from  './Header.module.css'
import App from '../../App';

const Header = (props)=>{

  return(
    <div>

    <div className={classes.black}>
      <h3>HOME    <span onClick={() => props.handleshow(false)}>STORE</span>   ABOUT</h3>
      <div className={classes.cart} onClick={() => props.handleshow(true)}><button>Cart {props.count}</button></div>
    
    </div>
    
    <div className={classes.header}>
       <h1> The Generics </h1>
      </div>
    </div>
  )
}
export default Header ;