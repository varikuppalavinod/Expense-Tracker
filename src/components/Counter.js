import classes from './Counter.module.css';
import {useSelector,useDispatch} from "react-redux";


const Counter = () => {
 const counter=useSelector(state=>state.counter)
 const dispatch=useDispatch()

  const incrementhandler=()=>{
     dispatch({type:"increment"})
  }
  const decrementhandler=()=>{
     dispatch({type:"decrement"})
  }

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      <div>
        <button onClick={incrementhandler}>increment</button>
        <button onClick={decrementhandler}>Decrement</button>
      </div>
    </main>
  );
};

export default Counter;

