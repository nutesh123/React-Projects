import { ReactDOM } from 'react'
import React from 'react'
import styles from'./cart.module.css'
import App from '../../App'
import { useState ,useEffect } from 'react'

const Cart =(props)=>{

  const [serverdata, setserverdata] = useState([]);

  useEffect(()=>{

    fetch("https://e-commers-project-9b5cf-default-rtdb.asia-southeast1.firebasedatabase.app/list.json")
    .then(Response=>Response.json()).then(jsondata =>{
    
      const propertyValues=Object.values(jsondata);
      
      setserverdata(propertyValues);
      console.log(propertyValues)
             }).catch((err)=>
             {
            console.log(err);  })

  },[])
 
    
              console.log(`inside Cart`, props.cart);
  return (
    <div className={styles.cartCss}>
      {serverdata.title}
     <h1>Cart Item</h1>
      {serverdata.map((product) => {
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