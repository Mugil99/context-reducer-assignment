import gloabalContext from "../context/globalContext";
import { useContext } from "react";
import React from "react";
const User=()=>{
    var {isLogin,setIsLogin}=useContext(gloabalContext);
    console.log(useContext(gloabalContext));
    return(
        <div>
           {
            isLogin?<h2>Current user:rohan, isAuthenticated: Yes</h2>:isLogin!=null?<h2>Current user:rohan, isAuthenticated: No</h2>:""
           }
          <button onClick={()=>(setIsLogin(true))}>Login</button>
          <button onClick={()=>(setIsLogin(false))}>SignOut</button>
        </div>
    )
}
export default User;