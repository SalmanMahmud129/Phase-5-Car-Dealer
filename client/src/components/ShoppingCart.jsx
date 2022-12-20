import React, {useState, useEffect} from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from "@stripe/react-stripe-js";
import { useNavigate } from 'react-router-dom';



const PUBLIC_KEY = process.env.REACT_APP_STRIPE_KEY
const stripePromise = loadStripe(PUBLIC_KEY)



function ShoppingCart({currentCart, setCurrentCart}) {

  useEffect(() =>{
    fetch("/current-cart")
    .then(resp => resp.json())
    .then(cartData => setCurrentCart(cartData))
  }, [])

  const navigate = useNavigate()

  console.log("shopping cart page", currentCart)

  const [clientSecret, setClientSecret] = useState("")


  const displayItemsInCart = currentCart.map(item =>{
    return (
    <li>{item.make},{item.model} , {item.price} </li>
    )
  })


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

      <button onClick={() => goToPaymentForm}>Pay Now</button>
    </div>
  )
}

export default ShoppingCart