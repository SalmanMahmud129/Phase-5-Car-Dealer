require 'stripe'
require 'dotenv'
Dotenv.load

class ChargeController < ApplicationController
    def create 
        Stripe.api_key = ENV['STRIPE_SECRET_KEY']
        token = params[:charge][:token]
        price = params[:price]

        charge = Stripe::Charge.create({
            amount: price,
            currency: 'usd',
            source: token,
            description: 'Test Charge!',
        })

        render json: charge
    end
end
