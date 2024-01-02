import React, { useEffect, useState }  from "react";

const Effect = ()=>{

    const[count,setCount] = useState(0)
    const[age,setAge] = useState(30)

    useEffect(()=>{
        alert(`Age is Changed to ${age}`)
    },[age])

    useEffect(()=>{
        alert(`Count is Changed to ${count}`)
    },[count])

    return(
    <div style={{border:"2px dashed white",padding:"80px",marginTop:"30px"}} >
        <h1>Effect</h1>
        <h2>Age:{age}</h2>
        <h2> Count: {count}</h2>
        <button 
            onClick={()=>{
                setCount(count+1)
            }}
        >Count +</button>
        <button onClick={()=>{
            setAge(age-1)
        }} > Age -</button>
    </div>
    )
}

export default Effect