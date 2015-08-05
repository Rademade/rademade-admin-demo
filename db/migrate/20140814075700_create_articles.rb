class CreateArticles < ActiveRecord::Migration
  def change
    create_table :articles do |t|
      t.string :name
      t.references :author, index: true
      t.integer :articles, :status
      t.timestamps
    end
  end
end
