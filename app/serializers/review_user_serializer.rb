class ReviewUserSerializer < ActiveModel::Serializer

  # this is used in the vehicle serializer
  attributes :id, :star_rating, :content, :vehicle_id, :username, :user_id

  def username
    self.object.user.username
  end

  def user_id
    self.object.user.id
  end
end
