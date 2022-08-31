import logo from './logo.svg';
import './App.css';
import React, { PureComponent } from 'react'
class App extends PureComponent
{
  constructor()
  {
    super();
    this.state={
      sr:1
               }
  }
    render()
    {
      console.warn("chek rendring ")
      return (
        <div className='App' >   
               <h1>pure componenet := {this.state.sr}</h1>
       <button onClick={()=>this.setState({sr:this.state.sr})} >
                update count
                </button>
               
       </div>
       
              );
    }
}

export default App;
