import React from 'react'
import { Card, Space, Button } from 'antd'
import { StarFilled } from '@ant-design/icons'

function ReviewsAtHome({reviews, renderReviews, setRenderReviews}) {
  
  const currentUser = localStorage.getItem("user_id")

  function handleDelete(review){
    console.log("review.id", review.id)
    fetch(`reviews/${review.id}`, {
      method: "DELETE"
    })
    setRenderReviews(!renderReviews)
  }
  console.log('reviewsAtHome', reviews)

  const displayReviews = reviews?.map(review =>{

    return(
      <>
        <Card
          title={review.username}
          extra={<Space> <StarFilled/> {review.star_rating + "/5"}  </Space>}
          style={{
            width: 200,
            margin: "10px"
          }}
        >
          <p>{review.content}</p>
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
      scrollBehavior: "auto"
    }}
    >
      {displayReviews}
    </div>
  )
}

export default ReviewsAtHome