import { useState } from "react";
import gloabalContext from "./globalContext";
const Provider=(props)=>{
    const[isLogin,setIsLogin]=useState(null);
    const[text,setText]=useState("");
    const[textArr,setTextArr]=useState([]);
    return(
        <gloabalContext.Provider value={{isLogin,setIsLogin,text,setText,textArr,setTextArr}}>
            {props.children}
        </gloabalContext.Provider>
    )
}
export default  Provider;