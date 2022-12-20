class CreateCartVehicles < ActiveRecord::Migration[7.0]
  def change
    create_table :cart_vehicles do |t|
      t.belongs_to :shopping_cart, null: false, foreign_key: true
      t.belongs_to :vehicle, null: false, foreign_key: true
      t.integer :item_quantity

      t.timestamps
    end
  end
end
