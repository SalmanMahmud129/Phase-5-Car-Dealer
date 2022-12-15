import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

function CarDetail({clickedCar}) {
    const onToken = (token) => {

        const charge = {
            token: token.id
        };
    
        const config = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ charge: charge, price: price * 100 })
        };
    
        fetch(CHARGES_URL, config)
        .then(res => res.json())
        .then(console.log)
    }
    console.log(clickedCar)
  return (
    <div>CarDetail: BUY NOW -------<StripeCheckout token={onToken} stripeKey={process.env.REACT_APP_STRIPE_KEY} /></div>
  )
}

export default CarDetail