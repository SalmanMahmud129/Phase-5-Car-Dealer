import logo from './logo.svg';
import './App.css';
import {Route, Routes} from 'react-router-dom'
import {useState, useEffect} from 'react'
import Navbar from './components/Navbar';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import About from './components/About';
import LogoutScreen from './components/LogoutScreen';



function App() {

  




  return (
    <div className="App">

      <Navbar />
      <Routes>

        <Route path="/" element={<Home />}/>

        <Route path="/login" element={<Login />}/>

        <Route path="/signup" element={<Signup />}/>
        
        <Route path="/about" element={<About />}/>

        <Route path="/logged-out" element={<LogoutScreen />}/>



        <Route path="/testing" element={<h1>Test Route</h1>}/>
          
      </Routes>
      
    </div>
  );
}

export default App;
