class CartVehiclesController < ApplicationController

    def index
        render json: CartVehicle.all, status: :ok
    end

    def create
        cart_vehicle = CartVehicle.create!(**cart_vehicle_params, shopping_cart_id: session[:shopping_cart_id] )
        render json: cart_vehicle, status: :created
    end

    # def destroy 

    # end


    private 

    def cart_vehicle_params
        params.permit(:vehicle_id)
    end
end
