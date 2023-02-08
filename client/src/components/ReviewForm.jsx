import React, {useState} from 'react'
import { Rate, Input, Button} from 'antd'
import { useParams } from 'react-router-dom'

function ReviewForm({reviewForm, setReviewForm, renderReviews, setRenderReviews}) {
  const [rating, setRating] = useState(null)
  const [content, setContent] = useState("")
  const [errors, setErrors] = useState([])
  const currentUser = localStorage.getItem("user_id")
  const {id} = useParams()

  const {TextArea} = Input

  

  function handleSubmit(e){
    e.preventDefault()
    console.log("submitted")

    const newReview = {
      content: content,
      star_rating: rating,
      user_id: currentUser,
      vehicle_id: id
    }

    console.log('newReview: ', newReview )

    fetch("/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newReview)
    })
    .then(resp => {
      if(resp.ok){
        resp.json().then(() => {
          setReviewForm(!reviewForm)
          setRenderReviews(!renderReviews)
        })
      } else{
        resp.json().then(data => {
          console.log(data.errors)
          setErrors(data.errors)
        })
      }
    }) 
  }

  console.log('rating', rating)
  console.log('content', content)

  return (
    <div className='login-container'>
      <form className='login-form-container'>
        <label>
          Rating
        </label>
        <br></br>
        <Rate value={rating} onChange={setRating}/>
        <br></br>
        <br></br>
        <br></br>

        <label>
          Comment
        </label>
        <TextArea rows={3} placeholder="Your Review/Comment..." value={content} onChange={(e) => setContent(e.target.value)} />

        <Button style={{marginLeft: '200px'}} type='primary' onClick={handleSubmit}>Submit Review/Comment</Button>

        {errors ? errors.map(error => <div key={error}className='login-error'>{error}</div>) : null}
      </form>
    </div>
  )
}

export default ReviewForm