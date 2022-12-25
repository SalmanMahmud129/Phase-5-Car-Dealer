require 'stripe'
require 'dotenv'
Dotenv.load
Stripe.api_key = ENV['STRIPE_SECRET_KEY']

class ChargeController < ApplicationController
    def create
        # binding.pry
        payment_intent = Stripe::PaymentIntent.create(
            amount: params[:amount]
            currency: 'usd',
            automatic_payment_methods: {
                enabled: true
            }
        )
        render json: {
            clientSecret: payment_intent['client_secret']
        }
    end

    def calculate_amount(ids)
        cart = Vehicle.where(id: ids)
        cart.sum(&:price)
    end
end
