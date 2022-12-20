class ShoppingCart < ApplicationRecord
  belongs_to :user
  has_many :cart_vehicles
end
