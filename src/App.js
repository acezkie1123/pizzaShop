import './App.css';
import Navbar from "./componets/Navbar"
import Footer from "./componets/Footer"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import About from "./pages/About"
import Menu from "./pages/Menu"
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
    
       <Routes  >
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>

      <Footer/>
    </Router>
    </div>
  );
}

export default App;
