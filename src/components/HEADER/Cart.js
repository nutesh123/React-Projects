import { ReactDOM } from 'react'
import React from 'react'
import classes from './Header.module.css'

const Cart =(props)=>{
    console.log(props.cart)
    return(
        <div>
           <h3>cart item</h3>
           <div>
            <h2>ITEM</h2>
            <h2>PRICE</h2>
            <h2>QUANTITY</h2>
            <button>REMOVE</button>
            <div>
                Total Amount 
            </div>
            <button>Purchase</button>

           </div>
        </div>
    )
     

}
export default Cart