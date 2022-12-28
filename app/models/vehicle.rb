class Vehicle < ApplicationRecord
    has_many :reviews, dependent: :destroy
    has_many :users, through: :reviews
    has_many :cart_vehicles
    has_many :shopping_carts, through: :cart_vehicles


    validates :make, presence: true
    validates :model, presence: true 
    validates :year, presence: true 
    validates :price, presence: true
    validates :color, presence: true 
    validates :transmission, presence: true 


    
    # has_and_belongs_to_many :shopping_carts
end
