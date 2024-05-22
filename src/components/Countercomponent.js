import {useReducer} from "react"
 

const intialstate={counter:0}

const counterreducer=(state,action)=>{
    if(action.type==="increment"){
        return {counter:state.counter+4}
    }
    if(action.type==="decrement"){
      return {counter:state.counter-4}
    }
    return state
}



function Countercomponent(){

  const[state,dispatch]=useReducer(counterreducer,intialstate)
    return (
      <div>
       <h1>Counter:{state.counter}</h1>
       <button  onClick={()=>{dispatch({type:"increment"})}}>increment</button>
       <button onClick={()=>{dispatch({type:"decrement"})}}>decrement</button>
      </div>
    );
  }
  export default Countercomponent;