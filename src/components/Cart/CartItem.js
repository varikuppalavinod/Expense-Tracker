import {cartActions} from "../../store/cart-slice"
import{useDispatch} from "react-redux"
import classes from './CartItem.module.css';

const CartItem = (props) => {
  const { title, quantity, total, price,id } = props.item;
  //console.log(props.item)
   const dispatch=useDispatch()

  const addtocarthandler=()=>{
    dispatch(cartActions.addItemToCart({
      id,
      title,
      price
    }))
  }
  const removetocarthandler=()=>{
    dispatch(cartActions.removeItemFromCart(id))
  }
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total}{' '}
          <span className={classes.itemprice}>(${price}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removetocarthandler}>-</button>
          <button onClick={addtocarthandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
