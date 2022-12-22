class CartVehicleSerializer < ActiveModel::Serializer
  attributes :id, :shopping_cart_id, :vehicle_id, :item_quantity
  belongs_to :vehicle
end
