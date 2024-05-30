import classes from './CartButton.module.css';
import{uiSliceActions} from "../../store/ui-slice"
import {useDispatch} from "react-redux"
import{useSelector} from "react-redux"


const CartButton = (props) => {
    const totalquantity=useSelector(state=>state.cart.totalQuantity)
    const dispatch=useDispatch()
    const togglehandler=()=>{
     dispatch(uiSliceActions.toggle())
    }
  return (
    <button className={classes.button} onClick={togglehandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalquantity}</span>
    </button>
  );
};

export default CartButton;