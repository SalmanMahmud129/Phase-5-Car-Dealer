# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_12_23_034431) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "cart_vehicles", force: :cascade do |t|
    t.bigint "shopping_cart_id", null: false
    t.bigint "vehicle_id", null: false
    t.integer "item_quantity"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["shopping_cart_id"], name: "index_cart_vehicles_on_shopping_cart_id"
    t.index ["vehicle_id"], name: "index_cart_vehicles_on_vehicle_id"
  end

  create_table "reviews", force: :cascade do |t|
    t.integer "star_rating"
    t.string "content"
    t.bigint "user_id", null: false
    t.bigint "vehicle_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_reviews_on_user_id"
    t.index ["vehicle_id"], name: "index_reviews_on_vehicle_id"
  end

  create_table "shopping_carts", force: :cascade do |t|
    t.integer "total_amount"
    t.bigint "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_shopping_carts_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.string "first_name"
    t.string "last_name"
    t.string "address"
    t.string "phone_num"
    t.boolean "admin", default: false
    t.string "email"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "vehicles", force: :cascade do |t|
    t.string "make"
    t.string "model"
    t.integer "year"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "price"
    t.string "color"
    t.string "transmission"
  end

  add_foreign_key "cart_vehicles", "shopping_carts"
  add_foreign_key "cart_vehicles", "vehicles"
  add_foreign_key "reviews", "users"
  add_foreign_key "reviews", "vehicles"
  add_foreign_key "shopping_carts", "users"
end
