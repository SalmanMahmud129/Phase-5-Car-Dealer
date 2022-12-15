class ReviewVehicleSerializer < ActiveModel::Serializer
  attributes :id, :make, :model, :year
end
