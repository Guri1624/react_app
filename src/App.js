import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './componenet/Home'
import Rout2 from './componenet/Rout2'
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="" element={<Rout2/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
