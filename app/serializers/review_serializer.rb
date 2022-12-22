class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :star_rating, :content, :user_id
  belongs_to :vehicle, serializer: ReviewVehicleSerializer
  belongs_to :user, serializer: ReviewUserSerializer
end
