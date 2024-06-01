import{useState} from "react"
import {authActions} from "../Redux/store/auth"
import{useDispatch,useSelector} from "react-redux"
import{useNavigate} from "react-router-dom"


const Authentication=()=>{
    const navigate=useNavigate()
   const dispatch=useDispatch()

   const isloggedin=useSelector(state=>state.auth.isloggedin)
   console.log(isloggedin)
    

    const[form,setform]=useState({
        email:"",
        password:""
    })
const changehandler=(event)=>{
    const{name,value}=event.target
    setform({
        ...form,
       [name]:value, 
    })
}
const submithandler=(event)=>{
  event.preventDefault()
  console.log(form)

  let url="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDLedg5jzm00E9kPND4FG9kuKewUFMNOtY"

  fetch(url,{
    method:"POST",
    body:JSON.stringify({
        email:form.email,
        password:form.password,
        returnSecureToken:true,
    }),
    headers:{
        "Content-Type":"application/json",

    }
  }).then(res=>{
    if(!res.ok){
        return res.json().then(data=>{
            throw new Error(data.error.message)
        })
    }
    return res.json()
  }).then(data=>{
    dispatch(authActions.login(data.idToken))
    navigate("/welcome")
    console.log(data)
  }).catch(error=>{
    alert(error.message)
  })
}

  return(
    <form onSubmit={submithandler}>
        <div>
            <input type="email" placeholder="email" name="email"value={form.email} onChange={changehandler}/>
        </div>
        <div>
            <input type="password"placeholder="password"name="password"value={form.password} onChange={changehandler}/>
        </div>
        <button>login</button>
    </form>
  )
}
export default Authentication






