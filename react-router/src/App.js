import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { NavLink} from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Support from "./Components/Support";
import Labs from "./Components/Labs";
import NotFound from "./Components/NotFound";
import Contact from "./Components/Contact";
import MainHeader from "./Components/MainHeader";
function App() {
  return (
      





    <div className="App">
        <nav>


        <ul>
          <li>
            <NavLink to="/">Home</NavLink>

          </li>
          <li>
            <NavLink to="/support">Support</NavLink>

          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>

          </li>
          <li>
            <NavLink to="/about">About</NavLink>

          </li>
          <li>
            <NavLink to="/labs">Labs</NavLink>

          </li>
        

        

        </ul>
        </nav>





      <Routes>
        <Route path ="/" element={<MainHeader/>} >
          <Route index element={<Home/>} />
          <Route path ="/support" element={<Support/>} />
          <Route path ="/about" element={<About/>} />
          <Route path ="/contact" element={<Contact/>} />
          <Route path ="/labs" element={<Labs/>} />
          <Route path ="/*" element={<NotFound/>} />
        </Route>
     

      </Routes> 



    </div>
  );
}

export default App;
