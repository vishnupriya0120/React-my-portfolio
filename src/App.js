
import './App.module.scss';
import './style.scss';
import Home from './pages/Home/Home';
import { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';


import {
  Route,
  Routes,
} from "react-router-dom";
function App() {
  useEffect(() => {
    AOS.init({
      once:true,
    });
  }, []);
  return (
    <div className="App">
      <Routes>
            <Route exact path="/" element={ <Home/>}>
            </Route>
      </Routes> 
    </div>
  );
}

export default App;
