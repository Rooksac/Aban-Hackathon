class CreateSupportforProtestors < ActiveRecord::Migration[7.0]
  def change
    create_table :supportfor_protestors do |t|
      t.string :support

      t.timestamps
    end
  end
end
