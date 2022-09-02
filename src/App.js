import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './componenet/Home'
import Rout2 from './componenet/Rout2'
import Error from './componenet/Error'
import Navbar from './componenet/Navbar'
import Contect from './componenet/Contect'
import Other from './componenet/Other'
import Loginrout from './componenet/Loginrout';
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/loginpage" element={<Loginrout/>}/>
          <Route path="/home" element={<Home />} />
          <Route path="/rout2" element={<Rout2 />} />
          <Route path="/Error/:name" element={<Error />} />
          <Route path="/" element={<Error />} />
          <Route path="/Contect/" element={<Contect />} />
          <Route path="/Other" element={<Other />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
