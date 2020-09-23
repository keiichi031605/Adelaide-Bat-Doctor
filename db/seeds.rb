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
product1 = Product.new(name: "Bat 1", description: "blah blah blah")
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

