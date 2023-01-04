import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import CarDetail from './CarDetail'
import Card from 'antd/es/card/Card'
import { Button, Space} from 'antd';


function CarItem({car, setRenderVehicles, renderVehicles}) {
    const isAdmin = localStorage.getItem("isAdmin")
    const { make, model, year, reviews, image} = car
    const [showReviews, setShowReviews] = useState(false)

    const { Meta } = Card

    const carReviews = reviews.map(review => <div key={review.id}> {review.star_rating} {review.content}</div>)

    function handleDelete(){
      console.log('car.id', car.id)
      fetch(`vehicles/${car.id}`, {
        method:"DELETE"
      })
      .then(() => setRenderVehicles(!renderVehicles))
    }

    console.log('car', car)
  return (
    <Space size={[10,16]} wrap>
      <Card hoverable style={{width: 270, marginLeft: "auto", marginRight: "auto"}} cover={<div style={{ overflow: "hidden", height: "150px"  }}><img alt="vehicle" style={{height: "100%"}}src={image} /></div>} >
        <Meta title={make} description={model}/>
        <Meta title={year}/>
        <br></br>
        <Meta title={
        <NavLink to={`/car-detail/${car.id}`} >
          <Button>Details</Button>
        </NavLink >}/>
        <br></br>
        
        <Meta title={isAdmin === "true" ? <Button onClick={handleDelete}>Remove Vehicle Listing</Button> : null}/>
        {/* {isAdmin === "true" ? <Button onClick={handleDelete}>Remove Vehicle Listing</Button> : null} */}
      </Card>
    </Space>
    
  )
}

export default CarItem