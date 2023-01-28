class VehiclesForReviewsSerializer < ActiveModel::Serializer
  attributes :id, :make, :model, :year
end
