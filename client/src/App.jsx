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
import ShoppingCart from './components/ShoppingCart';
import PaymentForm from './components/PaymentForm';
import { useParams } from 'react-router-dom';
import PaymentCompletePage from './components/PaymentCompletePage';
import 'semantic-ui-css/semantic.min.css'
// import { loadStripe } from '@stripe/stripe-js'
// import { Elements } from "@stripe/react-stripe-js";



// const stripePromise = loadStripe("pk_test_51MFOSFLAqV9ULwXF0EyTx1sHxsFgGoe1avTYqps5RbblnbIcg1IEdi3zUtcAKrG6HCnoyYhJmkN3GQdp2cpVws5s00KvOjNszB")


function App() {
  const currentUser = localStorage.getItem("user_id")

  const [carData, setCarData] = useState([])
  // const [clickedCar, setClickedCar] = useState(null)
  const [currentCart, setCurrentCart] = useState([])
  const [isInCart, setIsInCart] = useState(false)
  const [userData, setUserData] = useState([])

  useEffect(() =>{
    fetch('/vehicles')
    .then(resp => resp.json())
    .then(cars => setCarData(cars))
  },[])

   // allows for maintaining all the vehicles in the cart on all pages
  useEffect(() =>{
    fetch("/current-cart")
    .then(resp => resp.json())
    .then(cartData => {
      console.log("Current Cart Fetches in app")
      setCurrentCart(cartData)})
  }, [isInCart,currentUser])

  useEffect(() =>{
    fetch(`/users/${currentUser}`)
    .then(resp => resp.json())
    .then(user =>{
      setUserData(user)
    } )
  }, [currentUser])

  console.log(userData)

  console.log(carData)

  console.log("App's cart data", currentCart)

  

  return (
    <div className="App">

      <Navbar />
      <Routes>

        <Route path="/" element={<Home userData={userData} carData={carData} currentCart={currentCart}/>}/>

        <Route path="/login" element={<Login />}/>

        <Route path="/signup" element={<Signup />}/>
        
        <Route path="/about" element={<About />}/>

        <Route path="/logged-out" element={<LogoutScreen />}/>

        <Route path="car-detail/:id" element={<CarDetail setIsInCart={setIsInCart} currentCart={currentCart} setCurrentCart={setCurrentCart}/>}/>

        <Route path="/testing" element={<h1>Test Route</h1>}/>

        <Route path="/cart" element={<ShoppingCart isInCart={isInCart} setIsInCart={setIsInCart} currentCart={currentCart} setCurrentCart={setCurrentCart}/>} />

        <Route path="/payment-form" element={<PaymentForm />} />

        <Route path="/payment-complete" element={<PaymentCompletePage />} />
          
      </Routes>
      
    </div>
  );
}

export default App;
