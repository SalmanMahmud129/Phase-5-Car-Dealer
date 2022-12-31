class ReviewUserSerializer < ActiveModel::Serializer
  attributes :star_rating, :content, :vehicle_id, :user

  def user
    self.object.user.username
  end
end
