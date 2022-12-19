require 'stripe'
require 'dotenv'
Dotenv.load
Stripe.api_key = sk_test_51MFOSFLAqV9ULwXF5SMBw42Q4vcTLi2mvLjnVUT4hiD3jB7eiIZ6xOAbGimTpno0JVuwR70NTjZMQYIq3RrliqFg00XPDqZz9g

class ChargeController < ApplicationController
    def create
        payment_intent = Stripe::PaymentIntent.create(
            amount: calculate_amount(params[:ids])
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
