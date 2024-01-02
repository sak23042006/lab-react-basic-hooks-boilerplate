import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from './Context';

const UseEffect = () => {
  // useState
  let [count, setCount] = useState(0);
  let [content, setContent] = useState(false);
  let { darkTheme, setDarkTheme } = useContext(AppContext);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const displayContent = () => {
    alert('Content button clicked');
    setContent(!content);
  };

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  // useEffect
  useEffect(() => {
    return () => {
      console.log(count);
    };
  }, [count]);

  return (
    <div>
      <div>
        <button className="toggleButton" onClick={toggleTheme}>
          Toggle
        </button>
      </div>

      <div style={{boxShadow:"8px 8px 8px 0px black",height:"300px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-around"}} className={`contentContainer ${darkTheme ? 'darkTheme' : 'lightTheme'}`}>
        <button onClick={displayContent}>Content</button>
        <p style={{ display: content ? 'block' : 'none',fontSize:"18px" }}>
          He hid under the covers hoping that nobody would notice him there. It really didn't make much sense since it
          would be obvious to anyone who walked into the room there was someone hiding there, but he still held out
          hope. He heard footsteps coming down the hall and stop in front in front of the bedroom door He heard the
          squeak of the door hinges and someone opened the bedroom door. He held his breath waiting for whoever was
          about to discover him, but they never did
        </p>
        <h3>{count}</h3>
        <button onClick={increaseCount}>Like</button>
      </div>
    </div>
  );
};

export default UseEffect;