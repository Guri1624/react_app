import logo from './logo.svg';
import './App.css';
import React, { useRef } from 'react'
import Forward from './Forward'
function  App ()
{
  const inputrRef=useRef()
  function pass()
  {
     inputrRef.current.value="100"
     inputrRef.current.focus()
  }
      return (
      <div className='App' >   
             <h1>using forward ref</h1> 
             <Forward ref={inputrRef}/>
             <button onClick={()=>{pass()}}>handle input </button>
     </div>
     
            );
  }

export default App;
