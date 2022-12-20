class UsersController < ApplicationController

    before_action :find_user, only: [:show]
    def index 
        render json: User.all, status: :ok 
    end

    def show 
        render json: @user, status: :ok
    end

    def create 
        user = User.create!(user_params)
        session[:user_id] = user.id
        ShoppingCart.create!(user_id: user.id, total_amount: 0)
        session[:shopping_cart_id] = user.shopping_cart.id
        render json: user, status: :created
    end

    private 

    def find_user
        @user = User.find(params[:id])
    end

    def user_params
        params.permit(:username, :password, :first_name, :last_name, :address, :phone_num, :email)
    end
end
