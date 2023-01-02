import React, { useEffect, useState } from 'react';
import { Avatar, Divider, List, Skeleton, Card, Space, Button } from 'antd';
import {StarTwoTone, StarFilled} from '@ant-design/icons'




function ReviewContainer({carDetails}){

    const currentUser = localStorage.getItem("user_id")

    function handleDelete(review){
      console.log("deleted")
    }

    

    const displayReviews = carDetails.reviews?.map(review =>{ 
        console.log("review user id", review.user_id)
        console.log('currentUser', parseInt(currentUser))

        //conditionally render within the map a delete button depending on if the review belongs to the 
        //currently logged in user
        const displayDeleteBtn = parseInt(currentUser) === review.user_id ? 
        <Button style={{marginLeft: '150px'}} type='primary' onClick={() => handleDelete(review)}>Delete</Button> : null



        
        //========================= the map's actual returned jsx =========================\\
        return( 
        <>
          <Card
          title={review.username}
          extra={<Space> <StarFilled/> {review.star_rating + "/5"}  </Space>}
          style={{
            width: 300,
          }}
        >
          <p>{review.content}</p>
          {displayDeleteBtn}
           {/*^^^^^this is not displaying  */}
        </Card>
      </>
      )
       //========================= the map's actual returned jsx =========================\\
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
    flexDirection: 'column',
    scrollBehavior: "auto"
  }}
>

    {displayReviews}
</div>
</>
 )
};
export default ReviewContainer;