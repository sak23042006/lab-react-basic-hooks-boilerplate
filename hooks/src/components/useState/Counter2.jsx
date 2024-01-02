import React, { useState , useEffect } from "react";



const Counter2 = () =>{

        const [currAge,setAge] = useState(0)
        const [currSib, setSib] = useState(1);
    
        useEffect(()=>{
            console.log("Counter 2 Mounts");
        },)

    const handleAge = () =>{
        setAge(currAge+1)
    }

    const handleSib = () =>{
        setSib(currSib+1)
    }

    return(
        <div style={{border:"2px dashed white",padding:"80px",marginTop:"30px"}} >
            <h1>C O U N T E R - 2</h1>
            <h3>My Current Age is {currAge}</h3>
            <h4>My siblings are {currSib}</h4>
            <button onClick={handleAge} >Get Older</button>
            <button onClick={handleSib} >Get more Sib</button>
            <button>Decrease Siblings</button>
        </div>
    )
}

export default Counter2;