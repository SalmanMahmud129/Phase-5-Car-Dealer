class VehiclesInCartSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :total_amount
  has_many :cart_vehicles
end
