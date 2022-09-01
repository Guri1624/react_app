import logo from './logo.svg';
import './App.css';
import React, { useRef, useState } from 'react'
function  App ()
{ 
 
      return (
      <div className='App' >   
             <h1>simple HOC!</h1> 
             <HOC cmp={Counter}/>
             <HOCgreen cmp={Counter}/>
     </div>
            );
  }
  function HOC(props)
  {
    return (<h2 style={{backgroundColor:"red",width:100}}><props.cmp/></h2>)
}
function HOCgreen(props)
  {
    return(<h2 style={{backgroundColor:"green"}}> <props.cmp/></h2>)
  }
  function Counter()
  {
    const[count,setCount]=useState(0)
    return <div>
        <h2>{count}</h2>
<button onClick={()=>setCount(count+1)}>update</button>
      </div>
    
  }

export default App;
