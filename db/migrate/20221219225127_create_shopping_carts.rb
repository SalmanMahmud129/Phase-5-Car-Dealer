class CreateShoppingCarts < ActiveRecord::Migration[7.0]
  def change
    create_table :shopping_carts do |t|
      t.integer :total_amount
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
