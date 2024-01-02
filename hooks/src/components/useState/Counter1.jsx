import React, { useContext, useState } from "react";
import App from "../../App";
import { AppContext } from "../useContext/ParentContext";



const Counter1 = () =>{

    const [currAge,setCurrAge] = useState(20)

    const {isDark} = useContext(AppContext)

    const decrease = ()=>{
        setCurrAge(currAge-1)
    }

    const Increase10years = ()=>{

        // ! Method-1

        // setCurrAge(currAge + 10)
        
        // ^ Method-2

        for(let i = 0 ; i <  10 ; i++){
            setCurrAge((prev)=>prev+1)
        }
    }


    return(
        <div style={{border:"2px dashed white",padding:"80px",marginTop:"30px",backgroundColor:`{isDark?"black":""white}`,color:"white"}} >
            <h1>C O U N T E R - 1</h1>
            <h2>Age : {currAge}</h2>
            <button onClick={()=>{
                setCurrAge(currAge+1)
            }} >Get Older</button>
            <button onClick={decrease} >
                Get Younger
            </button>
            <button onClick={Increase10years} >
                Get Older by 10 Years
            </button>
        </div>
    )
}

export default Counter1