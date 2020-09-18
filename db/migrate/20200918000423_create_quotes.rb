class CreateQuotes < ActiveRecord::Migration[6.0]
  def change
    create_table :quotes do |t|
      t.string :first_name
      t.string :last_name
      t.text :enquiry
      t.string :photo
      t.string :email
      t.integer :phone

      t.timestamps
    end
  end
end
