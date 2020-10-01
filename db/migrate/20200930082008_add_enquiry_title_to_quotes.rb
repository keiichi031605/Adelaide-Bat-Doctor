class AddEnquiryTitleToQuotes < ActiveRecord::Migration[6.0]
  def change
    add_column :quotes, :enquiry_title, :text
  end
end
