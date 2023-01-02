class Review < ApplicationRecord
  belongs_to :user
  belongs_to :vehicle

  validates :content, presence: true
  default_scope { order("created_at DESC") }
end
