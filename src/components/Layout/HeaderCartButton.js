
import CartIcon from '../Cart/Carticon';
import classes from  './HeaderCartButton.module.css';

const HeaderCartButton =()=>{
    return(
        <button>
        <span className={classes.icon}>
            <CartIcon/>
        </span>
        <span>My Cart</span>
        <span className={classes.badge}>3</span>
        </button>
    )
}
export default HeaderCartButton ;