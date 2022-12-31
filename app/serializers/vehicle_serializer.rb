class VehicleSerializer < ActiveModel::Serializer
  attributes :id, :make, :model, :year, :price, :color, :transmission
  has_many :reviews, serializer: ReviewUserSerializer
  
end
