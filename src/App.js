import logo from './logo.svg';
import './App.css';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Home from './Components/Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import AddCenter from './Components/AddCenter';
import SubmitRequest from './Components/SubmitRequest';
function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>}></Route>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
      </Routes>
      </BrowserRouter> */}
      <AddCenter/>
      {/* <SubmitRequest/> */}
    </div>
  );
}

export default App;
