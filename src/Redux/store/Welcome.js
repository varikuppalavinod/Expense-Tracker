import{authActions} from "./auth"
import {useDispatch} from "react-redux"

const Welcome=()=>{
    const dispatch=useDispatch()

    const Logouthandler=()=>{
       // console.log("this is welcome page")
        dispatch(authActions.logout())
    }
 return(
    <div>
        <h1>welcome to new page</h1>
        <button onClick={Logouthandler}>Logout</button>
    </div>
 )
}
export default Welcome