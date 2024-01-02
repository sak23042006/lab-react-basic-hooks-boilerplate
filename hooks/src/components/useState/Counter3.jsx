import { useState } from "react";

const Counter3 = ()=>{
    
    const [data, setData] = useState({age:19, sibling:3});

    

    function handleAge(){
        setData({
            ...data,
            age:data.age+1
        }) 
    }

    const handleSibling = () =>{
        setData({
            ...data,
            sibling:data.sibling+1
        })
    }



    // const handleData = (key) =>{
    //     setData({
    //         ...data,
    //         key:data[key] + 1
    //     })
    // }



    return(
        <div style={{border:"2px dashed white",padding:"80px",marginTop:"30px"}} >
            <h1>C O U N T E R - 3</h1>
            <h2>My Age is : {data.age}</h2>
            <h2>My sibling are : {data.sibling}</h2>
            <button onClick={handleAge} >Get Older</button>
            <button onClick={handleSibling} >Handle Sibling</button>
        </div>
    )
}

export default Counter3