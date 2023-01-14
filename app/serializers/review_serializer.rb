class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :star_rating, :content, :user_id, :vehicle_id

  def username
    self.object.user.username
  end


  belongs_to :vehicle, serializer: VehiclesForReviewsSerializer
  # belongs_to :user, serializer: ReviewUserSerializer
end
