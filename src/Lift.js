function Lift(props)
{
    return(
        <div>
        <h1>childe component name</h1>
        <button onClick={props.alert}>click me </button>
        </div>
    )
}
export default Lift;  
        //

        import logo from './logo.svg';
import './App.css';
import React from 'react'
import Lift from './Lift'


function App() 
{
  function test()
  {
    alert("parent value show in child  ");
  }
      return (
     <div >   
            <h1>lifting state up</h1>
            <Lift alert={test}/>
    </div>
    
  );
}

export default App;



        //
