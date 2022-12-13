# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


puts "destroying all..."
User.destroy_all
Review.destroy_all
Vehicle.destroy_all


puts "seeding users..."

User.create!(
    username: "Admin",
    password_digest: BCrypt::Password.create('AdminPassword'), 
    first_name: "Salman", 
    last_name: "Mahmud",
    address: "31 Test Address, Test City, NY 12345",
    phone_num: "111-111-1111",
    admin: true,
    email: "salspaypal@gmail.com"
)

User.create!(
    username: "User1",
    password_digest: BCrypt::Password.create('User1Password'), 
    first_name: "Test1", 
    last_name: "Test2",
    address: "47 Test Address 2, Test City 2, NY 12345",
    phone_num: "222-222-2222",
    admin: false,
    email: "user1@gmail.com"
)


User.create!(
    username: "User2",
    password_digest: BCrypt::Password.create('User2Password'), 
    first_name: "Test3", 
    last_name: "Test4",
    address: "71 Test Address 4, Test City 6, NY 12345",
    phone_num: "333-333-3333",
    admin: false,
    email: "user2@gmail.com"
)

# puts "seeding vehicles"

