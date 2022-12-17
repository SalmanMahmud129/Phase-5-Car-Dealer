import React from 'react'
import { useEffect } from 'react'
import StripeCheckout from 'react-stripe-checkout'

function CarDetail({clickedCar, addToCart, removeFromCart, inCart}) {
    // const onToken = (token) => {

    //     const charge = {
    //         token: token.id
    //     };
    
    //     const config = {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({ charge: charge, price: price * 100 })
    //     };
    
    //     fetch(CHARGES_URL, config)
    //     .then(res => res.json())
    //     .then(console.log)
    // }
    console.log(clickedCar)
    // console.log(inCart)

    // function handleClick(){
    //     if (inCart.includes(clickedCar)){
    //         removeFromCart(clickedCar)
    //     }
    //     else{
    //         addToCart(clickedCar)
    //     }
    // }

    // useEffect(() => {
    //     console.log("Cart button clicked")
    // }, [inCart])

    // console.log(in)

    const addOrRemove = inCart.includes(clickedCar) ? 
    <button onClick={() => removeFromCart(clickedCar)}>Remove From Cart</button> : 
    <button onClick={() => addToCart(clickedCar)}>Add to Cart</button>


  return (
    <>
    {addOrRemove}
    {/* <button onClick={handleClick}> {renderButtonText} </button> */}
    {/* <div>CarDetail: BUY NOW -------<StripeCheckout token={onToken} stripeKey={process.env.REACT_APP_STRIPE_KEY} /></div> */}
    </>
  )
}

export default CarDetail