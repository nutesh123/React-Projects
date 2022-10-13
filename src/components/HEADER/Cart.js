import { ReactDOM } from 'react'
import React from 'react'
import classes from './Header.module.css'
import styles from'./cart.module.css'

const Cart =(props)=>{
    
             console.log(`inside Cart`, props.cart);
  return (
    <div className={styles.cartCss}>
     <h1>Cart Item</h1>
      {props.cart.map((product) => {
        return(
       <div>
          <img src={product.imageUrl}/> 
         <span><h2>ITEM : {product.title} </h2></span>   
            <h2>PRICE :${product.price} </h2>
            <h2>QUANTITY :</h2>
            <button>REMOVE</button>
      </div>
        )
      })}
    
            <div> 
                Total Amount 
            </div>
            <button>Purchase</button>
            </div>
    )
     

}
export default Cart