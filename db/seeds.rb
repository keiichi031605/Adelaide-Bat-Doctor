require 'open-uri'

puts "Cleaning database..."
# =>  Photo.destroy_all
Product.destroy_all
Quote.destroy_all
puts "Clean!"

puts "Creating Products..."
product_set = []
################################################################################
################################################################################
puts "Creating Product 1..."
product1 = Product.new(name: "Bat 1", description: "blah blah blah", photo: "assets/Productone.jpg")
product_set << product1

# puts "Adding Photos to Product 1..."
# product1_photo1 = Photo.new
# file = URI.open("https://res.cloudinary.com/daqhmzr2j/image/upload/v1592265682/Howqua-River-Walk-RC.1600x900-1100x619_zzj3zg.jpg")
# product1_photo1.file.attach(io: file, filename: "product1_photo1.jpg", content_type: 'image/jpg')


# product1_photo2 = Photo.new
# file = URI.open("https://res.cloudinary.com/daqhmzr2j/image/upload/v1592265682/51890742_zumoky.jpg")
# product1_photo2.file.attach(io: file, filename: "product1_photo2.jpg", content_type: 'image/jpg')

# product1_photo3 = Photo.new
# file = URI.open("https://res.cloudinary.com/daqhmzr2j/image/upload/v1592265682/Howqua-River-Walk-RC.1600x900-1100x619_zzj3zg.jpg")
# product1_photo3.file.attach(io: file, filename: "product1_photo3.jpg", content_type: 'image/jpg')
# product1.photos = [product1_photo1, product1_photo2, product1_photo3]
product1.save!

puts "Finished Product 1!"
################################################################################
################################################################################

puts "Creating Product 2..."
product2 = Product.new(name: "Bat 2", description: "blah blah blah", photo: "assets/Producttwo.jpg")
# file = File.open('app/assets/images/Productone.jpg')
# product2.photo.attach(io: file, filename: "#{product2}.jpg", content_type: 'image/jpg')
product_set << product2
product2.save!


puts "Finished Product 2!"
################################################################################
################################################################################

puts "Creating Product 3..."
product3 = Product.new(name: "Bat 3", description: "blah blah blah", photo: "assets/Productthree.jpg")
product_set << product3
product3.save!

puts "Finished Product 3!"
################################################################################
################################################################################

puts "Creating Product 4..."
product4 = Product.new(name: "Bat 4", description: "blah blah blah")
product_set << product4
product4.save!

puts "Finished Product 4!"
################################################################################
################################################################################

puts "Creating Product 5..."
product5 = Product.new(name: "Bat 5", description: "blah blah blah")
product_set << product5
product5.save!

puts "Finished Product 5!"
################################################################################
################################################################################

puts "Creating Product 6..."
product6 = Product.new(name: "Bat 6", description: "blah blah blah")
product_set << product6
product6.save!

puts "Finished Product 6!"
################################################################################
################################################################################

puts "Creating Product 7..."
product7 = Product.new(name: "Bat 7", description: "blah blah blah")
product_set << product7
product7.save!

puts "Finished Product 7!"
################################################################################
################################################################################

puts "Creating Product 8..."
product8 = Product.new(name: "Bat 8", description: "blah blah blah")
product_set << product8
product8.save!

puts "Finished Product 8!"
################################################################################
################################################################################

puts "Creating Product 9..."
product9 = Product.new(name: "Bat 9", description: "blah blah blah")
product_set << product9
product9.save!

puts "Finished Product 9!"
################################################################################
################################################################################


