import classes from './Counter.module.css';
import {useSelector,useDispatch} from "react-redux";
import {counterActions} from "../store/counter"


const Counter = () => {
 const counter=useSelector((state)=>state.counter.counter)
 const show=useSelector((state)=>state.counter.showCounter)
 const dispatch=useDispatch()

  const incrementhandler=()=>{
     dispatch(counterActions.increment())
  }
  const decrementhandler=()=>{
     dispatch(counterActions.decrement())
  }
  const increasehandler=()=>{
     dispatch(counterActions.increase((5)))  //amount 5 is called here payload
  }

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
     {show&&<div className={classes.value}>{counter}</div>}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      <div>
        <button onClick={incrementhandler}>increment</button>
        <button onClick={increasehandler}>Increase by 5</button>
        <button onClick={decrementhandler}>Decrement</button>
       
      </div>
    </main>
  );
};

export default Counter;
