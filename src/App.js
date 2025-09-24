import logo from './logo.svg';
// import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/HomeComponents/Navbar';
import Footer from './components/HomeComponents/Footer';
import Homepage from './pages/Home';
import Contact from './pages/Contact';
import OurPartners from './pages/OurPartner';
import CompanyGallery from './pages/Gallery';
import SimpleCareers from './pages/Career';
import Signup from './components/core/Signup';
import Login from './components/core/Login';
import Dashboard from './pages/Dashboard';

function App() {
  return (
  //  <Router>
  <div>
      <Navbar />
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/Our Partner" element={<OurPartners/>} />
          <Route path="/Gallery" element={<CompanyGallery/>} />
          <Route path="/Career" element={<SimpleCareers/>} />
          <Route path="/Signup" element={<Signup/>} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/Dashboard" element={<Dashboard/>} />
        </Routes>
      <Footer/>
      </div>
    // </Router>
  );
}

export default App;
