import classes from  './Header.module.css'
import YouTubeicon from '../../images/YouTubeicon.png'
import spotifyicon from  '../../images/spotifyicon.png'
import fb from  '../../images/fb.png'
const BottumHeader = ()=>{

  return(
    <div className={classes.bottumheader}>
       <h1> The Generics </h1>

    <button>  <img src={YouTubeicon} ></img></button>

   <img src={spotifyicon} ></img> 
   <button>  <img src={fb} ></img></button>
           </div>
  )
}
export default BottumHeader ;