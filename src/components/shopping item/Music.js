import { ReactDOM } from "react";
import React from "react";
import App from "../../App";
import classes from './music.module.css'


function Music(props)
{
    return(
     <div>
     <h2 className={classes.center}>Music</h2>
        <div className={classes.flex}>
           
            { props.itemlist.map((item)=>{
                return(
                    <div className={classes.centeritems}>
                         <img src={item.imageUrl}/> 
                       <p>{item.title}</p> 
                       <p>${item.price}</p>
                         <button className={classes.buttonCss} onClick={()=>{props.addtocart(item)}
                            }
                         >Add To Cart</button>
                    </div>
                )
             })
            }
            </div>
            </div>
    )
}
export default Music ;