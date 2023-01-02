class ReviewUserSerializer < ActiveModel::Serializer
  attributes :star_rating, :content, :vehicle_id, :username, :user_id

  def username
    self.object.user.username
  end

  def user_id
    self.object.user.id
  end
end
