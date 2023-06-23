import { useContext } from "react";
import gloabalContext from "../context/globalContext";

const AddItem=()=>{
    var{text,setText,textArr,setTextArr}=useContext(gloabalContext)
    function handleRemove(index){
        let newArr=[...textArr];
        var res=newArr.filter((_,idx)=>index!=idx)
        setTextArr(res);
    }

    return(
        <div>
            <input type="text" value={text} placeholder="Add Item" onChange={(e)=>(setText(e.target.value) )}></input>
            <button onClick={()=>{
                setTextArr([...textArr,text]) 
                setText("")}}>Add</button>
            <ul>
            {
                textArr&& textArr.map((text,index)=>(
                    <div>
                        <li>{text}</li>
                        <button onClick={()=>handleRemove(index)}>Remove</button>
                    </div>
                ))
            }
            </ul>
            <button onClick={()=>(setTextArr(null))}>Clear List</button>
        </div>
    )
}
export default AddItem;