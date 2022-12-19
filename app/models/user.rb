class User < ApplicationRecord
    has_many :reviews, dependent: :destroy
    has_many :vehicles, through: :reviews

    # has_one :shopping_carts

    has_secure_password
    validates :username, presence: true
    validates :password, presence: true
    validates :first_name, presence: true
    validates :last_name, presence: true
    validates :address, presence: true
    validates :email, presence: true
    validates :username, uniqueness: true
    validates :email, uniqueness: true
end
