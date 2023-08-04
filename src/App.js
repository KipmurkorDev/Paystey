import './App.css';
import About from './Components/About/About';
import Home from './Components/Home/Home';
import NavBar from './Layout/Nav/Nav';
import { Route, Routes } from 'react-router';

function App() {
  return (
    <>
    <NavBar/>
    <Routes> 
    <Route index element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    </Routes>
    </>
  );
}

export default App;
