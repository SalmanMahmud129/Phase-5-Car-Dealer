import React, {useEffect} from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Button, Result } from 'antd'

function PaymentCompletePage({isInCart, setIsInCart}) {
  const navigate = useNavigate()

  function clearCartToHome(){
    fetch("/clear-cart", {
      method: "DELETE"
    })
    .then(() =>{
      setIsInCart(!isInCart)
      navigate("/")
      // setCurrentCart({...currentCart, cart_vehicles: [currentCart.cart_vehicles.filter(item => item.vehicle_id !== id)]})
    })
  }
  return (
    <Result 
    status="success" 
    title="Purchase Completed!" 
    subTitle="Thank you for shopping with us!"
    extra={[<Button type='primary' onClick={clearCartToHome}>Home</Button>]}/>
    // <div>Thank you for your purchase! Please return <NavLink onClick={clearCartToHome}>Home!</NavLink> </div>
  )
}

export default PaymentCompletePage