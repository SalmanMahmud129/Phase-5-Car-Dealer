import React, { useState } from 'react'
import { useEffect } from 'react'
import StripeCheckout from 'react-stripe-checkout'
import { useParams } from 'react-router-dom'

function CarDetail({addToCart, removeFromCart, inCart}) {
   
    // console.log(clickedCar)
    const [carDetails, setCarDetails] = useState([])

    const {id} = useParams()

    useEffect(() => {
      fetch(`/vehicles/${id}`)
      .then(resp => resp.json())
      .then(carDetail => setCarDetails(carDetail) )
    },[])
    console.log("car detail state in CarDetail.js", carDetails)

    const addOrRemove = inCart.includes(carDetails) ? 
    <button onClick={() => removeFromCart(carDetails)}>Remove From Cart</button> : 
    <button onClick={() => addToCart(carDetails)}>Add to Cart</button>

//     const displayReviews = clickedCar.reviews.map(review =>{ 
//         console.log("review", review.id)
//         return <span key={review.id}>{review.star_rating} {review.content}</span>  
// })


  return (
    <>
    {carDetails.make}
    {carDetails.model}
    {carDetails.year}
    {/* {clickedCar.reviews ? displayReviews : null} */}
    {addOrRemove}
    {/* <button onClick={handleClick}> {renderButtonText} </button> */}
    {/* <div>CarDetail: BUY NOW -------<StripeCheckout token={onToken} stripeKey={process.env.REACT_APP_STRIPE_KEY} /></div> */}
    </>
  )
}

export default CarDetail


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