
import CartIcon from '../Cart/Carticon';
import './Header.module.css';

const HeaderCartButton =()=>{
    return(
        <button>
        <span><CartIcon></CartIcon></span>
        <span>My Cart</span>
        <span>3</span>
        </button>
    )
}
export default HeaderCartButton ;