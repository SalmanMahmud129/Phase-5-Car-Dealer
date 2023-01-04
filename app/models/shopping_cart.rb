class ShoppingCart < ApplicationRecord
  belongs_to :user
  has_many :cart_vehicles, dependent: :destroy
  has_many :vehicles, through: :cart_vehicles
end
