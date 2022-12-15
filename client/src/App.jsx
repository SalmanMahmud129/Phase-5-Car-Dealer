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
import CarDetail from './components/CarDetail';
import { useParams } from 'react-router-dom';



function App() {

  const [carData, setCarData] = useState([])
  const [clickedCar, setClickedCar] = useState(null)


  useEffect(() =>{
    fetch('/vehicles')
    .then(resp => resp.json())
    .then(cars => setCarData(cars))
  },[])

  console.log(carData)






  return (
    <div className="App">

      <Navbar />
      <Routes>

        <Route path="/" element={<Home carData={carData} setClickedCar={setClickedCar}/>}/>

        <Route path="/login" element={<Login />}/>

        <Route path="/signup" element={<Signup />}/>
        
        <Route path="/about" element={<About />}/>

        <Route path="/logged-out" element={<LogoutScreen />}/>

        <Route path="car-detail/:id" element={<CarDetail clickedCar={clickedCar}/>}/>

        <Route path="/testing" element={<h1>Test Route</h1>}/>
          
      </Routes>
      
    </div>
  );
}

export default App;
