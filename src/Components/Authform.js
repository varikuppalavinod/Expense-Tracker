

import {useRef,useState} from "react"
import classes from "./Authform.module.css"

const Authform=()=>{

 // const[isLogin,setisLogin]=useState(false)
  const inputemail=useRef()
  const inputpassword=useRef()
  const inputconformpassword=useRef()

  const submithandler=(event)=>{
     event.preventDefault()
     const enteredemail=inputemail.current.value;
    const  enteredpassword=inputpassword.current.value;
    const  entercorrectpassword=inputconformpassword.current.value;

    if(enteredpassword!==entercorrectpassword){
      alert("passwords do not match!")
      return;
    }

    //console.log(enteredemail,enteredpassword,entercorrectpassword)

   
    const url="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDLedg5jzm00E9kPND4FG9kuKewUFMNOtY";
              
    fetch(url,{
      method:"POST",
      body:JSON.stringify({
        email:enteredemail,
        password:enteredpassword,
        returnSecureToken:true,
      }),
      headers:{
        "Content-Type":"application/json",
      },
    }).then((res)=>{
      if(!res.ok){
        return res.json().then((data)=>{
          throw new Error(data.error.message)
        })
      }
      return res.json()

    }).then((data)=>{
      console.log(data)
      console.log("use has successfully signed up")
    }).catch((error)=>{
      alert(error.message)
    })
  }
  return(
    <form onSubmit={submithandler}>
    <div className={classes.authform}>
        <div><h1>SignUp</h1></div>
        <div>
        <input type="email" placeholder="email" ref={inputemail}/>
        <br></br><br></br>
        <input type="password" placeholder="password" ref={inputpassword}/>
        <br></br><br></br>
        <input type="password" placeholder="conformpassword"ref={inputconformpassword} />
        </div> <br></br><br></br>
        <button type="submit">Sign up</button>
        <br></br><br></br>
        </div>
        <button className={classes.button}>Have an account? login</button>
    </form>
  )
}
export default Authform
/*

import { useRef } from "react";
import classes from "./Authform.module.css";

const Authform = () => {
  const inputEmail = useRef();
  const inputPassword = useRef();
  const inputConfirmPassword = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredEmail = inputEmail.current.value;
    const enteredPassword = inputPassword.current.value;
    const enteredConfirmPassword = inputConfirmPassword.current.value;

    // Basic validation
    if (enteredPassword !== enteredConfirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDLedg5jzm00E9kPND4FG9kuKewUFMNOtY";

    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) {
          return res.json().then((data) => {
            throw new Error(data.error.message);
          });
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        console.log("token", data.idToken);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={classes.authform}>
        <div>
          <h1>Sign Up</h1>
        </div>
        <div>
          <input type="email" placeholder="Email" ref={inputEmail} required />
          <br />
          <br />
          <input type="password" placeholder="Password" ref={inputPassword} required />
          <br />
          <br />
          <input type="password" placeholder="Confirm Password" ref={inputConfirmPassword} required />
        </div>
        <br />
        <br />
        <button type="submit">Sign Up</button>
        <br />
        <br />
      </div>
    </form>
  );
};

export default Authform;
*/