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

admin = User.new(
    username: "Admin",
    password: 'AdminPassword', 
    first_name: "Salman", 
    last_name: "Mahmud",
    address: "31 Test Address, Test City, NY 12345",
    phone_num: "111-111-1111",
    admin: true,
    email: "salspaypal@gmail.com"
)
admin.password_digest = BCrypt::Password.create(admin.password)
admin.save


user2 = User.new(
    username: "User2",
    password: 'User2Password', 
    first_name: "Test1", 
    last_name: "Test2",
    address: "47 Test Address 2, Test City 2, NY 12345",
    phone_num: "222-222-2222",
    admin: false,
    email: "user2@gmail.com"
)

user2.password_digest = BCrypt::Password.create(user2.password)
user2.save


user3 = User.new(
    username: "User3",
    password: 'User3Password', 
    first_name: "Test1", 
    last_name: "Test2",
    address: "47 Test Address 2, Test City 2, NY 12345",
    phone_num: "222-222-2222",
    admin: false,
    email: "user3@gmail.com"
)

user3.password_digest = BCrypt::Password.create(user3.password)
user3.save


user4 = User.new(
    username: "User4",
    password: 'User4Password', 
    first_name: "Test1", 
    last_name: "Test2",
    address: "47 Test Address 2, Test City 2, NY 12345",
    phone_num: "222-222-2222",
    admin: false,
    email: "user4@gmail.com"
)

user4.password_digest = BCrypt::Password.create(user4.password)
user4.save

user5 = User.new(
    username: "User5",
    password: 'User5Password', 
    first_name: "Test1", 
    last_name: "Test2",
    address: "47 Test Address 2, Test City 2, NY 12345",
    phone_num: "222-222-2222",
    admin: false,
    email: "user5@gmail.com"
)

user5.password_digest = BCrypt::Password.create(user5.password)
user5.save


ShoppingCart.create!(user_id: User.second.id, total_amount: 0)
ShoppingCart.create!(user_id: User.third.id, total_amount: 0)
ShoppingCart.create!(user_id: User.fourth.id, total_amount: 0)
ShoppingCart.create!(user_id: User.fifth.id, total_amount: 0)








# User.create!(
#     username: "User2",
#     password: BCrypt::Password.create('User2Password'), 
#     first_name: "Test3", 
#     last_name: "Test4",
#     address: "71 Test Address 4, Test City 6, NY 12345",
#     phone_num: "333-333-3333",
#     admin: false,
#     email: "user2@gmail.com"
# )

puts "seeding vehicles"


camaro = Vehicle.create!(make: "Chevy", model: "Camaro", year:"2014", price: rand(20000..80000), color: Faker::Color.color_name, transmission: "Automatic")
camaro.photo.attach(io: File.open("./carPhotos/Camaro 14.jfif"), filename: "Camaro 14.jfif")

ford = Vehicle.create!(make: "Ford", model: "Focus", year:"2010", price: rand(20000..80000), color: Faker::Color.color_name, transmission: "Automatic")
ford.photo.attach(io: File.open("./carPhotos/Ford Focus.jfif"), filename: "Ford Focus.jfif")

hyundai = Vehicle.create!(make: "Hyundai", model: "Palisade", year:"2023", price: rand(20000..80000), color: Faker::Color.color_name, transmission: "Automatic")
hyundai.photo.attach(io: File.open("./carPhotos/Palisade 23.jfif"), filename: "Palisade 23.jfif")

jeep = Vehicle.create!(make: "Jeep", model: "Wrangler", year:"2017", price: rand(20000..80000), color: Faker::Color.color_name, transmission: "Automatic")
jeep.photo.attach(io: File.open("./carPhotos/Jeep Wrangler.jpg"), filename: "Jeep Wrangler.jpg")

nissan = Vehicle.create!(make: "Nissan", model: "Altima", year:"2015", price: rand(20000..80000), color: Faker::Color.color_name, transmission: "Automatic")
nissan.photo.attach(io: File.open("./carPhotos/Altima 15.jfif"), filename: "Altima 15.jpg")

toyota = Vehicle.create!(make: "Toyota", model: "Rav4", year:"2016", price: rand(20000..80000), color: Faker::Color.color_name, transmission: "Automatic")
toyota.photo.attach(io: File.open("./carPhotos/2016 Rav4.jfif"), filename: "2016 Rav4.jfif")

honda = Vehicle.create!(make: "Honda", model: "Civic", year:"2014", price: rand(20000..80000), color: Faker::Color.color_name, transmission: "Automatic")
honda.photo.attach(io: File.open("./carPhotos/2014 civic.jfif"), filename: "2014 civic.jfif")



puts "seeding reviews"

Review.create!(star_rating: rand(1..5), content: "test", user_id: User.all.ids.sample, vehicle_id: Vehicle.all.ids.sample)
Review.create!(star_rating: rand(1..5), content: "test2", user_id: User.all.ids.sample, vehicle_id: Vehicle.all.ids.sample)
Review.create!(star_rating: rand(1..5), content: "test3", user_id: User.all.ids.sample, vehicle_id: Vehicle.all.ids.sample)
Review.create!(star_rating: rand(1..5), content: "test4", user_id: User.all.ids.sample, vehicle_id: Vehicle.all.ids.sample)
Review.create!(star_rating: rand(1..5), content: "test5", user_id: User.all.ids.sample, vehicle_id: Vehicle.all.ids.sample)
Review.create!(star_rating: rand(1..5), content: "test6", user_id: User.all.ids.sample, vehicle_id: Vehicle.all.ids.sample)
Review.create!(star_rating: rand(1..5), content: "test7", user_id: User.all.ids.sample, vehicle_id: Vehicle.all.ids.sample)
Review.create!(star_rating: rand(1..5), content: "test7", user_id: User.all.ids.sample, vehicle_id: Vehicle.all.ids.sample)
Review.create!(star_rating: rand(1..5), content: "test7", user_id: User.all.ids.sample, vehicle_id: Vehicle.all.ids.sample)
Review.create!(star_rating: rand(1..5), content: "test7", user_id: User.all.ids.sample, vehicle_id: Vehicle.all.ids.sample)
Review.create!(star_rating: rand(1..5), content: "test7", user_id: User.all.ids.sample, vehicle_id: Vehicle.all.ids.sample)
Review.create!(star_rating: rand(1..5), content: "test7", user_id: User.all.ids.sample, vehicle_id: Vehicle.all.ids.sample)
Review.create!(star_rating: rand(1..5), content: "test7", user_id: User.all.ids.sample, vehicle_id: Vehicle.all.ids.sample)
Review.create!(star_rating: rand(1..5), content: "test7", user_id: User.all.ids.sample, vehicle_id: Vehicle.all.ids.sample)
Review.create!(star_rating: rand(1..5), content: "test7", user_id: User.all.ids.sample, vehicle_id: Vehicle.all.ids.sample)
Review.create!(star_rating: rand(1..5), content: "test7", user_id: User.all.ids.sample, vehicle_id: Vehicle.all.ids.sample)
Review.create!(star_rating: rand(1..5), content: "test7", user_id: User.all.ids.sample, vehicle_id: Vehicle.all.ids.sample)
Review.create!(star_rating: rand(1..5), content: "test7", user_id: User.all.ids.sample, vehicle_id: Vehicle.all.ids.sample)
Review.create!(star_rating: rand(1..5), content: "test7", user_id: User.all.ids.sample, vehicle_id: Vehicle.all.ids.sample)
Review.create!(star_rating: rand(1..5), content: "test7", user_id: User.all.ids.sample, vehicle_id: Vehicle.all.ids.sample)


# Sal786 password:Password
# Jon password:Password
# Antonio password:Password
# GraceK password:Password
# AlexJ Password:Password
# AdamKabak111 Password:Password

