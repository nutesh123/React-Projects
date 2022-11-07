import { Link } from 'react-router-dom';
import classes from  './Header.module.css'
import App from '../../App';

const Header = (props)=>{

  return(
    <div>
    <div className={classes.header}>
       <h1> The Generics </h1>
      </div>
    </div>
  )
}
export default Header ;