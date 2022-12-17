class AddPriceToVehicles < ActiveRecord::Migration[7.0]
  def change
    add_column :vehicles, :price, :integer
  end
end
