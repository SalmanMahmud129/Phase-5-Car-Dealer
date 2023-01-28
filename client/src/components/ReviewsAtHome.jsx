import React from 'react'
import { Card, Space, Button } from 'antd'
import { StarFilled } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'

function ReviewsAtHome({reviews, renderReviews, setRenderReviews}) {
  
  const currentUser = localStorage.getItem("user_id")

  const navigate = useNavigate()

  function handleDelete(review){
    console.log("review.id", review.id)
    fetch(`reviews/${review.id}`, {
      method: "DELETE"
    })
    setRenderReviews(!renderReviews)
  }
  console.log('reviewsAtHome', reviews)

  function handleRedirect(vehicle){
    navigate(`/car-detail/${vehicle}`)
  }

  const displayReviews = reviews?.map(review =>{

    return(
      <>
        <Card
          title={review.username}
          extra={<Space> <StarFilled/> {review.star_rating + "/5"}  </Space>}
          style={{
            width: 200,
            margin: "10px",
            cursor: "pointer"
          }}
          onClick={() => handleRedirect(review.vehicle.id)}
        >
          <p>{review.content}</p>
          <p>{review.vehicle.year} {review.vehicle.make} {review.vehicle.model}</p>

        </Card>
      </>
    )
  })
  
  return (
    <div
    style={{
      height: 800,
      width: 250,
      marginLeft: 'auto',
      marginRight: 'auto',
      alignItems: 'center',
      overflow: 'auto',
      overflowY: 'scroll',
      display: 'flex',
      flexDirection: 'column',
      scrollBehavior: "auto",
      backgroundColor: "rgba(23, 23, 23, 0.5)",
      borderRadius: "10px"
    }}
    >
      {displayReviews}
    </div>
  )
}
// background-color: rgba(23, 23, 23, 0.5);
  // border-radius: 10px;
export default ReviewsAtHome