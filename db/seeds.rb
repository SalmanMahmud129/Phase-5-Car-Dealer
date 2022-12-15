# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


puts "destroying all..."
User.destroy_all
Vehicle.destroy_all
Review.destroy_all


puts "seeding users..."

User.create!(
    username: "Admin",
    password: BCrypt::Password.create('AdminPassword'), 
    first_name: "Salman", 
    last_name: "Mahmud",
    address: "31 Test Address, Test City, NY 12345",
    phone_num: "111-111-1111",
    admin: true,
    email: "salspaypal@gmail.com"
)

User.create!(
    username: "User1",
    password: BCrypt::Password.create('User1Password'), 
    first_name: "Test1", 
    last_name: "Test2",
    address: "47 Test Address 2, Test City 2, NY 12345",
    phone_num: "222-222-2222",
    admin: false,
    email: "user1@gmail.com"
)


User.create!(
    username: "User2",
    password: BCrypt::Password.create('User2Password'), 
    first_name: "Test3", 
    last_name: "Test4",
    address: "71 Test Address 4, Test City 6, NY 12345",
    phone_num: "333-333-3333",
    admin: false,
    email: "user2@gmail.com"
)

puts "seeding vehicles"


Vehicle.create!(make: "Chevy", model: "Camaro", year:"2014")
Vehicle.create!(make: "Ford", model: "Focus", year:"2010")
Vehicle.create!(make: "Hyundai", model: "Palisade", year:"2023")
Vehicle.create!(make: "Jeep", model: "Wrangler", year:"2017")
Vehicle.create!(make: "Nissan", model: "Altima", year:"2015")
Vehicle.create!(make: "Toyota", model: "Rav4", year:"2016")
Vehicle.create!(make: "Honda", model: "Civic", year:"2014")


puts "seeding reviews"

Review.create!(star_rating: rand(1..5), content: "test", user_id: User.all.ids.sample, vehicle_id: Vehicle.all.ids.sample)
Review.create!(star_rating: rand(1..5), content: "test2", user_id: User.all.ids.sample, vehicle_id: Vehicle.all.ids.sample)
Review.create!(star_rating: rand(1..5), content: "test3", user_id: User.all.ids.sample, vehicle_id: Vehicle.all.ids.sample)
Review.create!(star_rating: rand(1..5), content: "test4", user_id: User.all.ids.sample, vehicle_id: Vehicle.all.ids.sample)
Review.create!(star_rating: rand(1..5), content: "test5", user_id: User.all.ids.sample, vehicle_id: Vehicle.all.ids.sample)
Review.create!(star_rating: rand(1..5), content: "test6", user_id: User.all.ids.sample, vehicle_id: Vehicle.all.ids.sample)
Review.create!(star_rating: rand(1..5), content: "test7", user_id: User.all.ids.sample, vehicle_id: Vehicle.all.ids.sample)



