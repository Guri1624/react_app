import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './componenet/Home'
import Rout2 from './componenet/Rout2'
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Link to="/home">home !</Link><br></br>
     <Link to="/rout2">rout2 !</Link><br></br>
    
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/rout2" element={<Rout2/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
