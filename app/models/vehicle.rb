class Vehicle < ApplicationRecord
    has_many :reviews, dependent: :destroy
    has_many :users, through: :reviews 
    # has_and_belongs_to_many :shopping_carts
end
