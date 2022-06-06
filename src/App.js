import NavBar from './NavBar'
import Login from './features/account/Login'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setToken } from "./features/account/accountSlice"
import './App.css';

const App=(props)=>{
  const {token} = useSelector(state=>{return state.account})
  const dispatch=useDispatch()
  useEffect(()=>{
    localStorage.getItem('token')&&dispatch(setToken(localStorage.getItem('token')))
  },[])
  return (
    <div>
      {
        token?<NavBar/>:<Login/>
      }
    </div>
  );
}

export default App;
