class ReviewVehicleSerializer < ActiveModel::Serializer
  attributes :star_rating, :content, :user_id, :vehicle_id
end
