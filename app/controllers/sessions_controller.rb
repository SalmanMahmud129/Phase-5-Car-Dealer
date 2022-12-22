class SessionsController < ApplicationController
    # skip_before_action :authorized, only: :create

    def create
        user = User.find_by(username: params[:username])
        # binding.pry
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            session[:shopping_cart_id] = user.shopping_cart.id
            render json: user, status: :created
        else
            render json: {error: {login: "Invalid username or password"}}, status: :unauthorized
        end
    end

    def destroy
        session.delete :user_id
        session.delete :shopping_cart_id
        head :no_content
    end
end
