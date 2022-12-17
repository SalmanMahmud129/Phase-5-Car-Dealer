require 'stripe'
require 'dotenv'
Dotenv.load
Stripe.api_key = sk_test_51MFOSFLAqV9ULwXFy1FwH9vcj4TPWWAzNGwOXGodDNgzF8ruuRvnlZMqTvzvHknBMu0aQoDo1X7kRydtcJnFlNLg00BlcAl2uo

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
