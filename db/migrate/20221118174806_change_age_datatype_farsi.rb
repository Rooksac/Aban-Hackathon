class ChangeAgeDatatypeFarsi < ActiveRecord::Migration[7.0]
  def change
    change_column(:farsis, :age, :string)
end
end
