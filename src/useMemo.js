import logo from './logo.svg';
import './App.css';
import React, { useMemo, useState } from 'react'
function App ()
{
  const [count,setCount]=useState(1);
  const [item,setItem]=useState(10);
const multicountMemo =useMemo(
  function multicount()
  {
    console.warn("callig")
    return count*2
  },[count]
)

      return (
        <div className='App' >   
               <h1>usememo hook in react </h1>
               <h2>count:= {count}</h2>
               <h2>item:= {item}</h2>
               <h2>retunn coint: {multicountMemo}</h2>
               <button onClick={()=>setCount(count+1)}>update count</button>
               <button onClick={()=>setItem(item+1)}>update count</button>

               
       </div>
       
              );
 }

export default App;