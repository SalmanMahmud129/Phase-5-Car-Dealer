import React, { useState } from 'react'
import { useEffect } from 'react'
import StripeCheckout from 'react-stripe-checkout'
import { useParams } from 'react-router-dom'
import EditVehicle from './EditVehicle'

function CarDetail({currentCart, setCurrentCart,setIsInCart, renderEditForm, setRenderEditForm}) {

    // console.log("Car Detail's cart data", currentCart)
    // console.log(clickedCar)
    const [carDetails, setCarDetails] = useState({})
    const isAdmin = localStorage.getItem("isAdmin")
    
    

    const {id} = useParams()

    useEffect(() => {
      fetch(`/vehicles/${id}`)
      .then(resp => resp.json())
      .then(carDetail => setCarDetails(carDetail) )
    },[currentCart, renderEditForm])
    console.log("car detail state in CarDetail.js", carDetails)

    
  function addToCart(){
    fetch(`/add-to-cart/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({vehicle_id: id})

    })
    .then(resp => resp.json())
    .then(addedCar => {
      setIsInCart(true)
      setCurrentCart({...currentCart, cart_vehicles: [...currentCart.cart_vehicles, addedCar]})}
      )
  }

  function removeFromCart(){
    fetch(`/remove-from-cart/${id}`, {
      method: "DELETE"
    })
    .then(() =>{
    setIsInCart(false)
    setCurrentCart({...currentCart, cart_vehicles: [currentCart.cart_vehicles.filter(item => item.vehicle_id !== id)]})
  }
    )

    
  }

  function editForm(){
    setRenderEditForm(!renderEditForm)
  }

 
  const cartButton = currentCart.cart_vehicles?.filter(vehicle => vehicle.vehicle_id === carDetails.id).length > 0 ?
  <button onClick={() => removeFromCart(carDetails)}>Remove From Cart</button> : 
  <button onClick={() => addToCart(carDetails)}>Add to Cart</button>

  const editButton = isAdmin ? <button onClick={() => editForm()}>Edit</button> : null
 

    const displayReviews = carDetails.reviews?.map(review =>{ 
        console.log("review", review.id)
        return <span key={review.id}>Star Rating: {review.star_rating} Comment: {review.content}</span>  
})

console.log("cart total: ",currentCart.total_amount)
  return (
    <>
    <div>{carDetails.make}</div>
    <div>{carDetails.model}</div>
    <div>{carDetails.year}</div>
    <div>{carDetails.color} </div>
    <div>{carDetails.transmission}</div>
    <div>
    {displayReviews}
    </div>
    <div>
      <span>${carDetails.price}</span>
    </div>
    {/* {clickedCar.reviews ? displayReviews : null} */}
    {cartButton}
    {editButton}
    {renderEditForm ? <EditVehicle carDetails={carDetails} id={id} setRenderEditForm={setRenderEditForm} renderEditForm={renderEditForm}/> : null}
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