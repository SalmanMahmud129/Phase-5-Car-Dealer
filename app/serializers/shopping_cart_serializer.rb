class ShoppingCartSerializer < ActiveModel::Serializer
  attributes :id, :total_amount, :user_id
  has_many :cart_vehicles
end
