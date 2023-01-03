class VehicleSerializer < ActiveModel::Serializer
  attributes :id, :make, :model, :year, :price, :color, :transmission, :image
  include Rails.application.routes.url_helpers

  has_many :reviews, serializer: ReviewUserSerializer

  def image
    if object.photo.attached?
      rails_blob_url(object.photo, only_path: true)
    end
  end 
end

  # def images
  #   return unless object.photos.attachments
  #   image_urls = object.photos.map do |photo| 
  #     URI.join(
  #       ActionController::Base.asset_host, 
  #       rails_blob_path(photo))
  #   end
  
  #   image_urls
  # end
  
  

