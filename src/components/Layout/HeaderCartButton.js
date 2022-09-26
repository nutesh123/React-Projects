
import CartIcon from '../Cart/Cart';
import './Header.module.css';

const HeaderCartButton =()=>{
    return(
        <div>
        <span><CartIcon></CartIcon></span>
        <span>my cart</span>
        <span>3</span>
        </div>
    )
}
export default HeaderCartButton ;