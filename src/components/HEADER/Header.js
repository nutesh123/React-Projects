import Cart from './Cart';
import classes from  './Header.module.css'


const Header = ()=>{

  return(
    <div>
    <div className={classes.black}>
      <h3>HOME    STORE   ABOUT</h3>
      <button className={classes.cart}>cart</button>
      <Cart></Cart>
    </div>
    
    <div className={classes.header}>
       <h1> The Generics </h1>
      </div>
    </div>
  )
}
export default Header ;