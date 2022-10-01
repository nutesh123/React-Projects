import './Mealitem.module.css'

import MealitemForm from './MealitemForm.js';
import classes from './Mealitem.module.css'

const MealItem =(props)=>{

    return(
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <div>{props.description}</div>
                <div>{props.price}</div>
            </div>
            <div>
                <MealitemForm></MealitemForm>
            </div>
        </li>
    )
}
export default MealItem ;