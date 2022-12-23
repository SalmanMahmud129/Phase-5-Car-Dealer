class AddColorToVehicles < ActiveRecord::Migration[7.0]
  def change
    add_column :vehicles, :color, :string
  end
end
