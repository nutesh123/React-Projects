
import Input from '../../UI/Input.js';
import classes from './MealItemForm.module.css'
const MealitemForm=()=>{
    return(
        <form>
            <Input
    label='Amount'
    input={{
        id: 'amount',
        type: 'number',
        min: '1',
        max: '5',
        step: '1',
        defaultValue: '1',
    }}
/>
            <input/>
            <button>Add</button>
        </form>
    )
}
export default MealitemForm ;