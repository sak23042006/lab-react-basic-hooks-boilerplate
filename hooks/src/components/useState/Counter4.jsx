import React,{useState , useEffect} from "react";
import { AppContext } from "../useContext/ParentContext";

const Counter4 = ()=>{

    const [age, setAge] = useState(19);
    const [sib, setSib] = useState(3);

    useEffect(()=>{
        
        return ()=>{
            console.log("unmounts");
        }
    },[])

    return(
    <div style={{border:"2px dashed white",padding:"80px",marginTop:"30px"}} >
        <h1>C O U N T E R - 4</h1>
        <h2>Age:{age}</h2>
        <h2>Sibling:{sib}</h2>
        <button onClick={()=>{
            setAge(prev=>prev+1)
        }} > Age </button>

        <button onClick={()=>{
            setSib(prev=>prev+1)
        }} >
            Sibling
        </button>
        {/* <button onClick={
            setAge(0)
        } >Reset</button> */}
    </div>
    )
}

export default Counter4