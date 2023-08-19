import './App.css';
import About from './Components/About/About';
import Home from './Components/Home/Home';
import Footer from './Layout/Footer/Footer';
import NavBar from './Layout/Nav/Nav';
import { Route, Routes } from 'react-router';
import Chess from './Pages/Chess';
import Pokemon from './Pages/Pokemon';
import Photography from './Pages/Photography';
import AiGenerative from './Pages/AiGenerative';
import Entertainment from './Pages/Entertainment';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';

function App() {
  return (
    <div className='app'>
      <NavBar />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/nft-chess' element={<Chess />} />
        <Route path='/nft-pokemon' element={<Pokemon />} />
        <Route path='/nft-photography' element={<Photography />} />
        <Route path='/nft-ai-generative' element={<AiGenerative />} />
        <Route path='/login' element={< Login/>} />
        <Route path='/signup' element={< Signup/>} />
        {['/entertainment-baseball', '/entertainment-football', '/entertainment-basketball'].map((path, index) => {
          return (
            <Route path={path} element={<Entertainment />} key={index} />
          );
        })}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
