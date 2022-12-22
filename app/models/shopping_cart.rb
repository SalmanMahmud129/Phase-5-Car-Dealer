class ShoppingCart < ApplicationRecord
  belongs_to :user
  has_many :cart_vehicles
  has_many :vehicles, through: :cart_vehicles
end
