import logo from './logo.svg';
import './App.css';
import React, { createRef } from 'react'
class  App extends React.Component
{
  constructor()
  {
    super();
    this.inputRef=createRef();
  }
componentDidMount()
{
  //console.warn(this.inputRef.current.value="")
}
  getvalue()   

  {
    console.warn(this.inputRef.current.value)
    this.inputRef.current.style.color="red"
    this.inputRef.current.style.backgroundColor="blue"
  }
  render()
  {
    
    return (
      <div className='App' >   
             <h1>Ref using in react</h1>  
            <input type="text" ref={this.inputRef} />
            <button onClick={()=>this.getvalue()}>ref cheking</button>
     </div>
     
            );
  }
 }

export default App;
