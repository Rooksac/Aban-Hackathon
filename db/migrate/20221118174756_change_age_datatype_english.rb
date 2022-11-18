class ChangeAgeDatatypeEnglish < ActiveRecord::Migration[7.0]
  def change
    change_column(:englishes, :age, :string)
end
end
