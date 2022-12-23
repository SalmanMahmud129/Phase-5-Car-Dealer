class AddTransmissionToVehicles < ActiveRecord::Migration[7.0]
  def change
    add_column :vehicles, :transmission, :string
  end
end
