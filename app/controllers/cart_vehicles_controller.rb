class CartVehiclesController < ApplicationController

    def index
        render json: CartVehicle.all, status: :ok
    end

    def create
        cart_vehicle = CartVehicle.create!(**cart_vehicle_params, shopping_cart_id: session[:shopping_cart_id] )
        cart = ShoppingCart.find(session[:shopping_cart_id])
        cart.total_amount += cart_vehicle.vehicle.price
        cart.save
        render json: cart_vehicle, status: :created
    end

    def destroy
        cart_vehicle = CartVehicle.find_by(shopping_cart_id: session[:shopping_cart_id], vehicle_id: params[:id])
        cart = ShoppingCart.find(session[:shopping_cart_id])
        cart.total_amount -= cart_vehicle.vehicle.price
        cart.save
        cart_vehicle.destroy
        head :no_content
    end

    def remove_all
        cart_vehicles = CartVehicle.all.where(shopping_cart_id: session[:shopping_cart_id])
        cart = ShoppingCart.find(session[:shopping_cart_id])
        cart.total_amount = 0
        cart.save
        cart_vehicles.destroy_all
        head :no_content

    end


    private 

    def cart_vehicle_params
        params.permit(:vehicle_id)
    end
end
