class CreateFarsis < ActiveRecord::Migration[7.0]
  def change
    create_table :farsis do |t|
      t.string :name
      t.integer :age
      t.string :date
      t.string :location
      t.string :cause
      t.string :image_small
      t.string :image_large
      
      t.timestamps
    end
  end
end
