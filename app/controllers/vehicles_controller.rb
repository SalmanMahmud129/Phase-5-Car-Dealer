class VehiclesController < ApplicationController
    before action :find_vehicle, only: [:show, :update, :destroy]

    def index 
        render json: Vehicle.all, status: :ok 
    end

    def show
        render json: @vehicle, status: :ok
    end

    def create
        vehicle = Vehicle.create!(vehicle_params)
        render json: vehicle, status: :created 
    end

    def update 
        @vehicle.update!(vehicle_params)
        render json: @vehicle, status: :accepted
    end

    def destroy 
        @vehicle.destroy
        head :no_content
    end

    

    private 

    def find_vehicle
        @vehicle = vehicle.find(params[:id])
    end

    def vehicle_params
        params.permit(:make, :model, :year)
    end
end
