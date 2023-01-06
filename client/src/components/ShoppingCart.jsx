import React, {useState, useEffect} from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from "@stripe/react-stripe-js";
import { useNavigate } from 'react-router-dom';
import PaymentForm from './PaymentForm';
import Card from 'antd/es/card/Card';
import { Space, Button, List} from 'antd';



const PUBLIC_KEY = process.env.REACT_APP_STRIPE_KEY
const stripePromise = loadStripe(PUBLIC_KEY)



function ShoppingCart({isInCart, setIsInCart, currentCart, setCurrentCart}) {

  const navigate = useNavigate()

  console.log("shopping cart page", currentCart)

  const [clientSecret, setClientSecret] = useState("")



  function removeFromCart(id){
    fetch(`/remove-from-cart/${id}`, {
      method: "DELETE"
    })
    .then(() =>{
    setIsInCart(!isInCart)
    setCurrentCart({...currentCart, cart_vehicles: [currentCart.cart_vehicles.filter(item => item.vehicle_id !== id)]})
  }
    )  
  }
  


  const displayItemsInCart = currentCart?.cart_vehicles?.map((item) =>{
    // console.log('item: ', item)
    return (
    
    <List.Item >
      {item.vehicle ? 
      <Card title={item.vehicle.make}>
        {item.vehicle.model}
        <br></br>
        ${item.vehicle.price}
        <br></br>
        <Button className="redButton" onClick={() => removeFromCart(item.vehicle_id)}>Remove From Cart</Button>
      </Card> 
      : null}
    </List.Item>
    // {item.vehicle ? item.vehicle.make : null},
    // {item.vehicle ? item.vehicle.model : null} , 
    // {item.vehicle ? item.vehicle.price : null}
    // <div><button onClick={() => removeFromCart(item.vehicle_id)}>Remove From Cart</button></div> 
    // </li>
    )
  })
  
  function clearCart(){
    fetch("/clear-cart", {
      method: "DELETE"
    })
    .then(() =>{
      setIsInCart(!isInCart)
      // setCurrentCart({...currentCart, cart_vehicles: [currentCart.cart_vehicles.filter(item => item.vehicle_id !== id)]})
    })
}

  // const calculateTotal = Object.values(currentCart.cart_vehicles.vehicle)

  function handleClick(){
    fetch('create-payment-intent', {
      method: "POST",
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify({amount: currentCart.total_amount})
    })
    .then(resp => resp.json())
    .then((data) => {
      setClientSecret(data.clientSecret)
      // goToPaymentForm()
    })
  }

  const appearance = {
    theme: 'stripe'
  }
  
  const options = {
    clientSecret,
    appearance
  }

  return (
    <div style={{display: "inline-block"}}>
      <header>
        <h1>Your Cart</h1>
      </header>
      <List >
        {displayItemsInCart}
      </List>
      {/* <ul>
         {displayItemsInCart}
      </ul> */}

      <span>Total: ${currentCart.total_amount}</span>
      <br></br>
      <Button type='primary' onClick={handleClick}>Pay Now</Button>
      <br></br>
      <Button className="redButton" onClick={clearCart}>Clear Cart</Button>


      <div>
        {clientSecret && (
          <Elements options={options} stripe={stripePromise}>
            <PaymentForm/>
          </Elements>
        )}
      </div>
      
    </div>
  )
}

export default ShoppingCart