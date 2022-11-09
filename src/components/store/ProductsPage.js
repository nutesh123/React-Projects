import { ReactDOM } from "react";
import React from "react";
import { Link } from "react-router-dom";
import classes from './music.module.css'
import Header from "../HEADER/Header";
import BottumHeader from "../HEADER/BottumHeader";
import Cart from "../Cart/Cart";
function ProductPage(props)
{
    return(
     <div>
        <Header></Header>
     <h2 className={classes.center}>Music</h2>
        <div className={classes.flex}>
           
            { props.itemlist.map((item)=>{
                return(
                    <div className={classes.centeritems}>
                         <img src={item.imageUrl}/> 
                       <div><Link to={`/store/${item.title}`}>{item.title}</Link></div> 
                       <div>${item.price}</div>
                         <button className={classes.buttonCss} onClick={()=>{props.addtocart(item)}
                            }
                         >Add To Cart</button>
                    </div>
                )
             })
            }
            </div>
            <BottumHeader></BottumHeader>
            </div>
    )
}
export default ProductPage ;