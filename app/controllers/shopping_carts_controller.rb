class ShoppingCartsController < ApplicationController
   
    def show
        render json: ShoppingCart.find(session[:shopping_cart_id])
    end
    def current_cart 
        current_cart = ShoppingCart.find(session[:shopping_cart_id])
        render json: current_cart, serializer: VehiclesInCartSerializer, status: :ok
    end


    private 

end
