
import './App.module.scss';
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import Work from './components/Work/Work';
import Contact from './components/Contact/Contact';
import {
  Route,
  Routes,
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
            <Route exact path="/home" element={ <Home/>}>
            </Route>
            <Route exact path="/about" element={ <About/>}>
            </Route>
            <Route exact path="/services" element={ <Services/>}>
            </Route>
            <Route exact path="/work" element={ <Work/>}>
            </Route>
            <Route exact path="/contact" element={ <Contact/>}>
            </Route>
      </Routes>
    </div>
  );
}

export default App;
