class AddColumsToFarsi < ActiveRecord::Migration[7.0]
  def change
    add_column :farsis, :image_small, :string
    add_column :farsis, :image_large, :string
  end
end
