import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import CarDetail from './CarDetail'


function CarItem({car, setClickedCar}) {
    const { make, model, year, reviews} = car
    const [showReviews, setShowReviews] = useState(false)

    const carReviews = reviews.map(review => <div key={review.id}> {review.star_rating} {review.content}</div>)
  return (
    <>
    <div>{make}, {model}, {year} -picture- 
     <NavLink to={`/car-detail/${car.id}`} >
        <button onClick={() => setClickedCar(car)}>Details</button>
    </NavLink >
    </div>
    </>
  )
}

export default CarItem