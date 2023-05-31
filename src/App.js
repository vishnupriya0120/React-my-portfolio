
import './App.module.scss';
import Home from './pages/Home/Home';

import {
  Route,
  Routes,
} from "react-router-dom";
function App() {
  return (
    <div className="App">
     
      <Routes>
            <Route exact path="/" element={ <Home/>}>
            </Route>
            {/* <Route exact path="/about" element={ <About/>}>
            </Route>
            <Route exact path="/services" element={ <Services/>}>
            </Route>
            <Route exact path="/work" element={ <Work/>}>
            </Route>
            <Route exact path="/contact" element={ <Contact/>}>
            </Route> */}
      </Routes> 
     
    </div>
  );
}

export default App;
