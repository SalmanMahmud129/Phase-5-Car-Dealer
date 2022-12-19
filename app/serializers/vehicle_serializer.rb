class VehicleSerializer < ActiveModel::Serializer
  attributes :id, :make, :model, :year, :price
  has_many :reviews
end
