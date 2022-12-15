class ReviewsController < ApplicationController
    before action :find_vehicle, only: [:show, :update, :destroy]
    
    def index 
        render json: Review.all, status: :ok
    end

    def show 
        render json: @review, status: :ok 
    end

    def create
        review = Review.create!(review_params)
        render json: review, status: :created
    end

    def update 
        @review.update!(review_params)
        render json: @review, status: :accepted
    end

    def destroy
        @review.destroy
        head :no_content
    end



    private 

    def find_review
        @review = Review.find(params[:id])
    end

    def review_params
        params.permit(:star_rating, :content, :user_id, :vehicle_id)
    end

end
