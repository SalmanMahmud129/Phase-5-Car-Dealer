class VehicleSerializer < ActiveModel::Serializer
  attributes :id, :make, :model, :year
  has_many :reviews
end
