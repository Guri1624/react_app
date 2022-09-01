import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
function  App ()
{
  const [val,setval]=useState("000");
  const [item,setitem]=useState();
 
      return (
      <div className='App' >   
             <h1>controlled statemnt</h1> 
             <input type="text" value={val} onChange={(e)=>setval(e.target.value)}/>
             <h3>show value= {val}</h3>
     </div>
     
            );
  }

export default App;
