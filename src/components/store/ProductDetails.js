import React from 'react'
import { useParams } from 'react-router-dom'
import App from '../../App';
import classes from './details.module.css'

function ProductDetails({data}) {

    const {urlName} = useParams(); 


  return (
    <div className={classes.card}>
            {data.filter((list)=>list.title===urlName) .map((list) => (
                <div key={ list.id }>
                   <img src={list.imageUrl}/> 
                  <h2>Name: {list.title}</h2>
                  <h4>Price: ${list.price}</h4>
                  <button>Add to Cart</button>
                </div>
              ))}
        </div>
  )
}


export default ProductDetails