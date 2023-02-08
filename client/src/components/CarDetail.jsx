import React, { useState } from 'react'
import { useEffect } from 'react'
import StripeCheckout from 'react-stripe-checkout'
import { useParams } from 'react-router-dom'
import EditVehicle from './EditVehicle'
import ReviewContainer from './ReviewContainer'
import { Button, Descriptions} from 'antd';
import ReviewForm from './ReviewForm'

function CarDetail({isInCart, currentCart, setCurrentCart,setIsInCart, renderEditForm, setRenderEditForm, reviewForm, setReviewForm, renderReviews, setRenderReviews, renderVehicles,setRenderVehicles}) {

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
  <Button className='redButton' onClick={() => removeFromCart(carDetails)}>Remove From Cart</Button> : 
  <Button type="primary" onClick={() => addToCart(carDetails)}>Add to Cart</Button>

  const editButton = isAdmin === "true" ? <Button type='primary' onClick={() => editForm()}>Edit</Button> : null
 



console.log("cart total: ",currentCart.total_amount)
console.log('reviewForm state in Car Detail: ', reviewForm)
  return (
    <div className='carDetail'>
    <div style={{ overflow: "hidden", height: "400px"  }}>
    <img style={{height: "100%"}} src={carDetails.image} alt="Vehicle" />

    </div>
    
    
    
    {/* {clickedCar.reviews ? displayReviews : null} */}
    <div style={{marginLeft: "auto", marginRight: "auto", maxWidth:"1000px"}}>
    <Descriptions style={{ backgroundColor: "rgba(255, 255, 255, 0.75)", background:"white", borderRadius: "25px"}} title="Details" column={2} bordered>
      <Descriptions.Item label="Make">{carDetails.make}</Descriptions.Item>
      <Descriptions.Item label="Model">{carDetails.model}</Descriptions.Item>
      <Descriptions.Item label="Year">{carDetails.year}</Descriptions.Item>
      <Descriptions.Item label="color">{carDetails.color}</Descriptions.Item>
      <Descriptions.Item label="Transmission">{carDetails.transmission}</Descriptions.Item>
      <Descriptions.Item label="Price">${carDetails.price}</Descriptions.Item>

    </Descriptions>

    </div>
    {/* {displayReviews} */}
    {currentUser ? cartButton : null}
    {editButton}
    {renderEditForm ? <EditVehicle carDetails={carDetails} id={id} setRenderEditForm={setRenderEditForm} renderEditForm={renderEditForm}/> : null}
    <br></br>
    <br></br>
    <div>
      <p style={{marginRight: '150px'}} >Reviews:</p>
      <ReviewContainer renderVehicles={renderVehicles} setRenderVehicles={setRenderVehicles} renderReviews={renderReviews} setRenderReviews={setRenderReviews} carDetails={carDetails}/>
      {currentUser ? <Button style={{marginLeft: '150px'}} type='primary' onClick={() => renderReviewForm()}>Leave a Review</Button>: null}
      {reviewForm ? <ReviewForm reviewForm={reviewForm} setReviewForm={setReviewForm} renderReviews={renderReviews} setRenderReviews={setRenderReviews}/> : null}
    </div>
    {/* <button onClick={handleClick}> {renderButtonText} </button> */}
    {/* <div>CarDetail: BUY NOW -------<StripeCheckout token={onToken} stripeKey={process.env.REACT_APP_STRIPE_KEY} /></div> */}
    </div>
  )
}

export default CarDetail


 