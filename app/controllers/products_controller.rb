class ProductsController < ApplicationController
  # require "open-uri"

  def index
    @products = Product.all
  end

  def show
    @product = Product.find(params[:id])
  end

  def new
    @product = Product.new
  end

  # def create
  #   @spot = Spot.new(spot_params)
  #   @user = current_user
  #   # @spot.photo = spot_params[:photos]
  #   spot_photo = Photo.new
  #   if (params[:no_model_fields][:photo_url]).empty?
  #     file = URI.open("https://www.travelmarvel.com.au/-/media/apt-responsive-website/miscellaneous/hero-panel-12-5/generic-12-5/hc-a-gen-map-travel-destinations-419995780-s-12-5.jpg?useCustomFunctions=1&rw=2280&w=1900&h=950&cropX=304&cropY=0")
  #   else
  #     file = URI.open(params[:no_model_fields][:photo_url])
  #   end
  #   spot_photo.file.attach(io: file, filename: "#{@spot.name}", content_type: 'image/jpg')
  #   @spot.photos = [spot_photo]
  #   if @spot.save
  #     redirect_to new_spot_story_path(@spot)
  #   else
  #     render 'new'
  #   end
  # end

  def destroy
    @product.destroy
    redirect_to products_path
  end

  private

  def product_params
    params.require(:product).permit(:name, :description)
  end
end
