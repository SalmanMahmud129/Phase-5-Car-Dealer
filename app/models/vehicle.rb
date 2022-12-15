class Vehicle < ApplicationRecord
    has_many :reviews, dependent: :destroy
    has_many :vehicles, through: :reviews 
end
