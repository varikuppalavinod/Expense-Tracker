import Authentication from "./Redux/Authentication"
import Welcome from "./Redux/store/Welcome"
import{BrowserRouter,Routes,Route} from "react-router-dom"

const App=()=>{
 return(
  <div>
  
  <BrowserRouter>
  
  <Routes>
    <Route path="/" element={<Authentication/>}/>
    <Route path="/welcome"element={<Welcome/>}/>
  </Routes>
  </BrowserRouter>
  </div>
 )
}
export default App

/*
import ExpenseItem from "./components/ExpenseItem";

function App() {
  return (
    <div>
      <h1>Let's get Started</h1>
      <ExpenseItem></ExpenseItem>
    </div>
  );
}

export default App;
*/
