import logo from './logo.svg';
import './App.css';
import React, { useRef } from 'react'
function  App ()
{ 
  let inputRef=useRef(null)
  let inputRef2=useRef(null)
  
  function submitform(e)
  {
e.preventDefault()
console.warn("input filg value=",inputRef.current.value)
console.warn("input filg value2=",inputRef2.current.value)
let input3=document.getElementById('input3').value
console.warn("input  fild value3",input3)
  }
      return (
      <div className='App' >   
             <h1>uncontroled component</h1> 
             <form onSubmit={submitform}>
             <input ref={inputRef} type="text"/><br></br>
             <input ref={inputRef2}type="text"/><br></br>
             <input id="input3" type="text"/><br></br>
             <button>click me </button><br></br>
             </form>
     </div>
            );
  }

export default App;
