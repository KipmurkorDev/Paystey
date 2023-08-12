import './App.css';
import About from './Components/About/About';
import Home from './Components/Home/Home';
import Footer from './Layout/Footer/Footer';
import NavBar from './Layout/Nav/Nav';
import { Route, Routes } from 'react-router';
import Furniture from './Pages/Furniture';

function App() {
  return (
    <div className='app'>
    <NavBar/>
    <Routes> 
    <Route index element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/furniture' element={<Furniture/>}/>

    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
