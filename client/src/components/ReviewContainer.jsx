import React, { useEffect, useState } from 'react';
import { Avatar, Divider, List, Skeleton, Card, Space } from 'antd';
import {StarTwoTone, StarFilled} from '@ant-design/icons'




function ReviewContainer({carDetails}){

    const displayReviews = carDetails.reviews?.map(review =>{ 
        console.log("review", review.user)
        return( <Card
        title={review.user}
        extra={<Space> <StarFilled/> {review.star_rating + "/5"} </Space>}
        style={{
          width: 300,
        }}
      >
        <p>{review.content}</p>
      </Card>
      )
        // <span key={review.id}>Star Rating: {review.star_rating} Comment: {review.content}</span>  
})

 return(
<>
<div
    id="scrollableDiv"
    style={{
    height: 400,
    width: 400,
    marginLeft: 'auto',
    marginRight: 'auto',
    alignItems: 'center',
    overflow: 'auto',
    overflowY: 'scroll',
    display: 'flex',
    flexDirection: 'column-reverse',
  }}
>

    {displayReviews}
</div>
</>
 )
};
export default ReviewContainer;