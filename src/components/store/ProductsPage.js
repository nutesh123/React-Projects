import { ReactDOM } from "react";
import React from "react";
import { Link } from "react-router-dom";
import classes from './music.module.css'
import Header from "../HEADER/Header";
import BottumHeader from "../HEADER/BottumHeader";
import Cart from "../Cart/Cart";
import { useState } from "react";


function ProductPage(props)
{

    const [data, setdata] = useState([]);

    let handleSubmit = async () => {
        try {
          let res = await fetch("https://e-commers-project-9b5cf-default-rtdb.asia-southeast1.firebasedatabase.app/list.json", {
            method: "POST",
            body: JSON.stringify(data),
          });
          let resJson = await res.json();
          if (res.status === 200) {
            console.log('succesfully send')
          } else {
            console.log("Some error occured");
          }
        } catch (err) {
          console.log(err);
        }
      };
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
                         <button className={classes.buttonCss} onClick={()=>{props.addtocart(item)
                         handleSubmit(setdata(item))}
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