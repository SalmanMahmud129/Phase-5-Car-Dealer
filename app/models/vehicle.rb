class Vehicle < ApplicationRecord
    has_many :reviews, dependent: :destroy
    has_many :users, through: :reviews
    has_many :cart_vehicles
    has_many :shopping_carts, through: :cart_vehicles
    
    validates :make, presence: true
    validates :model, presence: true 
    validates :year, presence: true 
    validates :price, presence: true
    validates :color, presence: true 
    validates :transmission, presence: true 

    has_one_attached :photo
    
    # validate :photo_format

    # def resize_image
    #     resized_image = MiniMagick::Image.read(photo.download)
    #     resized_image = resized_image.resize "250x250"
    #     v_filename = photo.filename
    #     v_content_type = photo.content_type
    #     photo.purge
    #     photo.attach(io: File.open(resized_image.path), filename: v_filename, content_type: v_content_type)
    # end

    # private

    # def photo_format
    #     return unless photo.attached?
    #     if photo.blob.content_type.start_with? 'image/'
    #         if photo.blob.byte_size > 10.megabytes
    #             errors.add(:photo, 'size needs to be less than 10MB')
    #             photo.purge
    #         else
    #             resize_image
    #         end
    #     else
    #         photo.purge
    #         errors.add(:photo, 'needs to be an image')
    #     end
    # end




    
    # has_and_belongs_to_many :shopping_carts
end
