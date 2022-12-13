class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :username
      t.string :password_digest
      t.string :first_name
      t.string :last_name
      t.string :address
      t.string :phone_num
      t.boolean :admin, default: false
      t.string :email

      t.timestamps
    end
  end
end
