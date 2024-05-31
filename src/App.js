
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import {useSelector,useDispatch} from "react-redux"
import{useEffect,Fragment} from "react"
import {uiSliceActions} from "./store/ui-slice"
import Notification from "./components/UI/Notification"

function App() {
  const showcart=useSelector(state=>state.ui.cartisvisible)
  const cart=useSelector(state=>state.cart)
  const dispatch=useDispatch()
  const notification=useSelector(state=>state.ui.notification)

  useEffect(()=>{
    const sendCartData= async()=>{
      dispatch(uiSliceActions.showNotification({
        status:"Pending",
        title:"Sending...",
        message:"Sending cartdata!"
      }))
      const response=await fetch("https://expensetracker-89dc3-default-rtdb.firebaseio.com/cart.json",
      {
       method:"PUT",
       body:JSON.stringify(cart),
      });
      if(!response.ok){
        throw new Error("Sending cart data failed!")
  
      }
      dispatch(uiSliceActions.showNotification({
        status:"success",
        title:"Success...",
        message:"Sent cart data successfully!"
      }))
    }
   sendCartData().catch(error=>{
    dispatch(uiSliceActions.showNotification({
      status:"error",
      title:"Error...",
      message:"Sending cart data failed!"
    }))
   })
  },[cart,dispatch])
  return (
    <Fragment>
     {notification && <Notification
     status={notification.status}
     title={notification.title}
     message={notification.message}/>}
    <Layout>
     {showcart&& <Cart />}
      <Products />
    </Layout>
    </Fragment>
  );
}

export default App;
