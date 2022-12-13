class User < ApplicationRecord
    has_many :reviews 
    has_many :vehicles, through: :reviews

end
