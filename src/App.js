import './App.css';
import About from './Components/About/About';
import Home from './Components/Home/Home';
import Footer from './Layout/Footer/Footer';
import NavBar from './Layout/Nav/Nav';
import { Route, Routes } from 'react-router';

function App() {
  return (
    <div className='app'>
    <NavBar/>
    <Routes> 
    <Route index element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
