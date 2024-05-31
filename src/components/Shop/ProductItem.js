/*
import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import {useDispatch} from "react-redux"
import{cartActions} from "../../store/cart-slice"

const ProductItem = (props) => {
  const { title, price, description,id } = props;
 const dispatch=useDispatch()
  const addtoCartHandler=()=>{
     dispatch(cartActions.additemToCart({
        id,
        title,
        price,
     }))
  }

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addtoCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
*/

import { useDispatch } from 'react-redux';

import { cartActions } from '../../store/cart-slice';
import Card from '../UI/Card';
import classes from './ProductItem.module.css';

const ProductItem = (props) => {

  const dispatch = useDispatch();

  const { title, price, description, id } = props;

  const addToCartHandler = () => {
    

    // and then send Http request
    // fetch('firebase-url', { method: 'POST', body: JSON.stringify(newCart) })

     dispatch(
      cartActions.addItemToCart({
         id,
         title,
         price,
       })
     );
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
