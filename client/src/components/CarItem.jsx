import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import CarDetail from './CarDetail'


function CarItem({car, setRenderVehicles, renderVehicles}) {
    const isAdmin = localStorage.getItem("isAdmin")
    const { make, model, year, reviews} = car
    const [showReviews, setShowReviews] = useState(false)

    const carReviews = reviews.map(review => <div key={review.id}> {review.star_rating} {review.content}</div>)

    function handleDelete(){
      console.log('car.id', car.id)
      fetch(`vehicles/${car.id}`, {
        method:"DELETE"
      })
      .then(() => setRenderVehicles(!renderVehicles))
    }
  return (
    <>
    <div>{make}, {model}, {year} -picture- 
     <NavLink to={`/car-detail/${car.id}`} >
        <button>Details</button>
    </NavLink >
    {isAdmin === "true" ? <button onClick={handleDelete}>Remove Vehicle Listing</button> : null}
    </div>
    </>
  )
}

export default CarItem