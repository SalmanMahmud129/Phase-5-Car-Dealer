import React, { useState } from 'react'
import { useEffect } from 'react'
import StripeCheckout from 'react-stripe-checkout'
import { useParams } from 'react-router-dom'
import EditVehicle from './EditVehicle'
import ReviewContainer from './ReviewContainer'
import { Button } from 'antd';
import ReviewForm from './ReviewForm'

function CarDetail({isInCart, currentCart, setCurrentCart,setIsInCart, renderEditForm, setRenderEditForm, reviewForm, setReviewForm}) {

    // console.log("Car Detail's cart data", currentCart)
    // console.log(clickedCar)
    const [carDetails, setCarDetails] = useState({})
    const isAdmin = localStorage.getItem("isAdmin")
    const currentUser = localStorage.getItem("user_id")
    
    

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
      setIsInCart(!isInCart)
      setCurrentCart({...currentCart, cart_vehicles: [...currentCart.cart_vehicles, addedCar]})}
      )
  }

  function removeFromCart(){
    fetch(`/remove-from-cart/${id}`, {
      method: "DELETE"
    })
    .then(() =>{
    setIsInCart(!isInCart)
    setCurrentCart({...currentCart, cart_vehicles: [currentCart.cart_vehicles.filter(item => item.vehicle_id !== id)]})
  }
    )

    
  }

  function editForm(){
    setRenderEditForm(!renderEditForm)
  }

  function renderReviewForm(){
    console.log("reviewForm")
    setReviewForm(!reviewForm)
  }

 
  const cartButton = currentCart.cart_vehicles?.filter(vehicle => vehicle.vehicle_id === carDetails.id).length > 0 ?
  <button onClick={() => removeFromCart(carDetails)}>Remove From Cart</button> : 
  <button onClick={() => addToCart(carDetails)}>Add to Cart</button>

  const editButton = isAdmin === "true" ? <Button type='primary' onClick={() => editForm()}>Edit</Button> : null
 



console.log("cart total: ",currentCart.total_amount)
console.log('reviewForm state in Car Detail: ', reviewForm)
  return (
    <>
    <div>{carDetails.make}</div>
    <div>{carDetails.model}</div>
    <div>{carDetails.year}</div>
    <div>{carDetails.color} </div>
    <div>{carDetails.transmission}</div>
    <div>
      <span>${carDetails.price}</span>
    </div>
    
    
    {/* {clickedCar.reviews ? displayReviews : null} */}
    {cartButton}
    {editButton}
    {renderEditForm ? <EditVehicle carDetails={carDetails} id={id} setRenderEditForm={setRenderEditForm} renderEditForm={renderEditForm}/> : null}
    
    {/* {displayReviews} */}
    <br></br>
    <br></br>
    <div>
      <p style={{marginRight: '150px'}} >Reviews:</p>
      <ReviewContainer carDetails={carDetails}/>
      {currentUser ? <Button style={{marginLeft: '150px'}} type='primary' onClick={() => renderReviewForm()}>Leave a Review</Button>: null}
      {reviewForm ? <ReviewForm /> : null}
    </div>
    {/* <button onClick={handleClick}> {renderButtonText} </button> */}
    {/* <div>CarDetail: BUY NOW -------<StripeCheckout token={onToken} stripeKey={process.env.REACT_APP_STRIPE_KEY} /></div> */}
    </>
  )
}

export default CarDetail


 