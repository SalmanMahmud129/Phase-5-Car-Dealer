class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :star_rating, :content
  belongs_to :vehicle, serializer: ReviewVehicleSerializer
  belongs_to :user, serializer: ReviewUserSerializer
end
