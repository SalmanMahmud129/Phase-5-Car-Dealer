import React, { useState } from 'react'
import { useEffect } from 'react'
import StripeCheckout from 'react-stripe-checkout'
import { useParams } from 'react-router-dom'

function CarDetail({currentCart, setCurrentCart}) {
  
  // maintaining all the vehicles in the cart on this page
  useEffect(() =>{
    fetch("/current-cart")
    .then(resp => resp.json())
    .then(cartData => {
      console.log("cart data", cartData)
      setCurrentCart(cartData)})
  }, [])

    console.log("current cart", currentCart)
    // console.log(clickedCar)
    const [carDetails, setCarDetails] = useState({})

    const {id} = useParams()

    useEffect(() => {
      fetch(`/vehicles/${id}`)
      .then(resp => resp.json())
      .then(carDetail => setCarDetails(carDetail) )
    },[])
    console.log("car detail state in CarDetail.js", carDetails)

    
  function addToCart(){
    fetch("/add-to-cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({vehicle_id: id})

    })
    .then(resp => resp.json())
    .then(addedCar => setCurrentCart({...currentCart, cart_vehicle: [...currentCart.cart_vehicles, addedCar]}))
  }

  function removeFromCart(removedItem){ 
    const updatedCart = currentCart.filter(item => item.id !== removedItem.id )
    // setCurrentCart(updatedCart)
  }

  console.log("Filter--------", currentCart.cart_vehicles?.filter(vehicle => {
    console.log("Vehicle in filter -------------> ", vehicle)
    return vehicle.vehicle_id === carDetails.id}))
    // const addOrRemove = currentCart.cart_vehicles?.includes(carDetails)  ?
  const addOrRemove = currentCart.cart_vehicles?.filter(vehicle => vehicle.vehicle_id === carDetails.id).length > 0 ?
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