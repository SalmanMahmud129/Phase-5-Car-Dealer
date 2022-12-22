import React, {useState, useEffect} from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from "@stripe/react-stripe-js";
import { useNavigate } from 'react-router-dom';



const PUBLIC_KEY = process.env.REACT_APP_STRIPE_KEY
const stripePromise = loadStripe(PUBLIC_KEY)



function ShoppingCart({currentCart, setCurrentCart}) {

  const navigate = useNavigate()

  console.log("shopping cart page", currentCart)

  const [clientSecret, setClientSecret] = useState("")


  const displayItemsInCart = currentCart.cart_vehicles?.map((item) =>{
    return (
    <li>
    {item.vehicle.make ? item.vehicle.make : null},
    {item.vehicle.model ? item.vehicle.model : null} , 
    {item.vehicle.price ? item.vehicle.price : null} 
    </li>
    )
  })


  // const calculateTotal = Object.values(currentCart.cart_vehicles.vehicle)


  function goToPaymentForm(){
    navigate("/payment-form")
  }

  

  return (
    <div>
      <header>
        <h1>Your Cart</h1>
      </header>
      <ul>
        {displayItemsInCart}
      </ul>

      <span>Total: {currentCart.total_amount}</span>
      <button onClick={() => goToPaymentForm()}>Pay Now</button>
    </div>
  )
}

export default ShoppingCart