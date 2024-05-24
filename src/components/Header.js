
import {useSelector,useDispatch} from "react-redux"
import classes from './Header.module.css';
import{authActions} from "../store/auth"

const Header = () => {

    const isAuth=useSelector(state=>state.auth.isAuthenticated);
    const dispatch=useDispatch()
    const logouthandler=()=>{
     dispatch(authActions.logout())
    }
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
     {isAuth&& <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={logouthandler}>Logout</button>
          </li>
        </ul>
      </nav> }
    </header>
  );
};

export default Header;