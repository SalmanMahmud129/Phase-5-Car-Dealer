class CartVehicle < ApplicationRecord
  belongs_to :shopping_cart
  belongs_to :vehicle
end
