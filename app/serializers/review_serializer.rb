class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :star_rating, :content, :user_id, :username

  def username
    self.object.user.username
  end


  belongs_to :vehicle, serializer: VehiclesForReviewsSerializer
  # belongs_to :user, serializer: ReviewUserSerializer
end
