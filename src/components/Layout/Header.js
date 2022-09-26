import React,{Fragment} from "react";
import './Header.module.css'
import classes from './Header.module.css'

import dishes from '../../assets/Dishes.jpg'
import HeaderCartButton from "./HeaderCartButton";

function Header (){
    return(
        <Fragment>
            <header className={classes.header}>
              <h1> React Meals</h1>
              <HeaderCartButton></HeaderCartButton>
             <button> Cart</button>
            </header>
            <div className={classes['main-image']}>
            <img src={dishes}></img>
            </div>
        </Fragment>
    )
}
export default Header ;