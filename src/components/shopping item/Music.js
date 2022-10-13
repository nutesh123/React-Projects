import { ReactDOM } from "react";
import React from "react";
import App from "../../App";
import classes from './music.css'


function Music(props)
{
    return(
        <div className={classes.center}>
            <h2>Music</h2>
            
            { props.itemlist.map((item)=>{
                return(
                    <div className={classes.center}>
                         <img src={item.imageUrl}/> 
                       <p>{item.title}</p> 
                       <p>${item.price}</p>
                         <button onClick={()=>{props.addtocart(item)}
                            }
                         >Add to Cart</button>
                    </div>
                )
             })
            }
            </div>
    )
}
export default Music ;