class CartVehicleSerializer < ActiveModel::Serializer
  attributes :id, :shopping_cart_id, :vehicle_id, :item_quantity, :vehicle
  
  def vehicle 
    self.object.vehicle
  end
end
