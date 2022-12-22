class CartVehiclesController < ApplicationController

    def index
        render json: CartVehicle.all, status: :ok
    end

    def create
        cart_vehicle = CartVehicle.create!(**cart_vehicle_params, shopping_cart_id: session[:shopping_cart_id] )
        render json: cart_vehicle, status: :created
    end

    def destroy
        cart_vehicle = CartVehicle.find_by(shopping_cart_id: session[:shopping_cart_id], vehicle_id: params[:id])
        cart_vehicle.destroy
        head :no_content
    end


    private 

    def cart_vehicle_params
        params.permit(:vehicle_id)
    end
end
